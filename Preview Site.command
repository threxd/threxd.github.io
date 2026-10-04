#!/bin/bash
# Double-click me to preview the site with working video embeds.
# (Press Ctrl+C in this window, or just close it, to stop the preview.)
cd "$(dirname "$0")"
( sleep 1; open "http://localhost:8123" ) &
python3 -m http.server 8123
