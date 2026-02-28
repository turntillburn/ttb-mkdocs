#!/bin/bash
set -euo pipefail

URL="https://turntillburn.ch/verticalsecrets/assets/pdf"
OUTPUT_DIR="$(pwd)"

for f in ~/Documents/TTB-Website/VerticalSecrets/Vertical_secrets_HighEnd/*VS*.pdf; do
  out="$(basename "$f")"
  name="${out%.pdf}"

  cat <<EOF > tmp.txt
$name

Dieses Kapitel ist in der GitHub-Version nicht enthalten.

Der Download ist verfuegbar unter:

$URL
EOF

  enscript tmp.txt -B -o - | ps2pdf - "$OUTPUT_DIR/$out"
done

rm -f tmp.txt
