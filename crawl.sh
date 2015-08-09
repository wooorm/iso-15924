#!/bin/sh

ARCHIVE_URL="http://unicode.org/iso15924/iso15924.txt.zip"
ARCHIVE_PATH="data/iso-15924.zip"
TEXT_PATH="iso15924-utf8-20150715.txt"

if [ ! -e "$ARCHIVE_PATH" ]; then
  curl -L "$ARCHIVE_URL" -o "$ARCHIVE_PATH"
fi

unzip "$ARCHIVE_PATH" "$TEXT_PATH" -d data
mv "data/$TEXT_PATH" data/iso-15924.txt
