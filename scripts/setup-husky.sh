#!/usr/bin/env bash
set -euo pipefail
npm pkg set scripts.prepare="husky install"
npm i -D @commitlint/cli @commitlint/config-conventional husky
npx husky install
npx husky add .husky/commit-msg 'npx --no -- commitlint --edit "$1"'
echo "Husky commit-msg hook installed."
