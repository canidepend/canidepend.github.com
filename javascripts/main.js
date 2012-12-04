
function build_site() {
  var content = $('#main_content');
  content.empty();
  content.append('Index: ');

  $.each(version_data, function(program_key, group) {
    content.append(
      $('<a></a>')
        .text(group.short || group.description)
        .attr('href', '#'+program_key),
      ' '
    );
  });

  $.each(version_data, function(group_key, group) {
    var groupContainer = $('<div class="group"></div>');
    groupContainer.append(
      $('<h2></h2>').text(group.short).append(
        $('<a>#</a>').attr('href', '#'+group_key).attr('name', group_key)
      ),
      $('<p></p>').text(group.description)
    );

    $.each(group.programs, function(program_key, program) {
      var header = $('<tr>').append('<th>');
      var rows = {
        prev1: $('<tr class=prev1>').append('<td>-2</td>'),
        prev0: $('<tr class=prev0>').append('<td>-1</td>'),
        current: $('<tr class=current>').append('<td>Current</td>'),
        beta: $('<tr class=beta>').append('<td>Next</td>')
      };

      $.each(distros, function(distro_key, distro) {
        header.append(
          $('<th>')
            .text(distro.short || distro.description)
            .addClass(distro.styleClass || distro_key)
        );

        $.each(rows, function(version_key, row_el) {
          var td = $('<td>');
          var distro_version_key = distro[version_key];
          if (distro_version_key &&
              program.versions[distro_key] &&
              program.versions[distro_key][distro_version_key] !== undefined) {
            var program_distro_version = program.versions[distro_key][distro_version_key];
            var distro_version = distro.versions[distro_version_key];
            if (program_distro_version.version) {
              td.addClass('supported');
              var quirks = [];
              if (program_distro_version.quirks) {
                $.each(program_distro_version.quirks, function(idx, quirk) {
                  quirks.push(
                    $('<span class=quirk></span>')
                      .text(quirk)
                      .attr('title', distro.quirks[quirk])
                  )
                });
              }
              td.append(
                $('<div class=dv></div>').text(distro_version.short || distro_version.description).attr('title', distro_version.description),
                $('<div class=pv></div>').text(program_distro_version.version).append(quirks)
              );
            } else {
              td.addClass('unsupported').attr('title','unsupported');
            }
          } else {
            td.addClass('unknown');
          }
          row_el.append(td);
        });
      });

      var programContainer = $('<div class="program"></div>').attr('id', program_key);
      programContainer.append(
        $('<h3></h3>').text(program.description).append(
          $('<a>#</a>').attr('href', '#'+program_key)
        ),
        $('<table></table>').append(header).append(
          $.map(rows,function(el) {
            return el;
          })
        )
      );
      groupContainer.append(programContainer);
    });
    content.append(groupContainer);
  });
}
