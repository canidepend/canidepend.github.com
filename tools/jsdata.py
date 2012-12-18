import json
import re

__all__ = ['loads']

def _jsline2jsonline(line):
    line = re.sub("(//.*)$", "", line)
    line = re.sub("(/\*.*\*/)", "", line)
    line = re.sub("var (.*) =", "\"\\1\":", line)
    line = re.sub("};", "},", line)
    line = re.sub("([a-zA-Z0-9]+): ", "\"\\1\": ", line)
    return line

def loads(s):
    lines = [_jsline2jsonline(l) for l in s.split("\n")]
    s = '{' + (" ".join(lines)) + '}'
    while True:
        (s, changes_made) = re.subn("\,( *)\}", "}", s)
        if changes_made == 0: break
    return json.loads(s)
            
