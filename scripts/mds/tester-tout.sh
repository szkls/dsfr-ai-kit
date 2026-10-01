#!/bin/sh
# Lance les tests DSFR sur tous les écrans mds et écrit un résumé dans scripts/mds/releves/_tests.txt
cd "$(dirname "$0")/../.."
: > scripts/mds/releves/_tests.txt
for d in screens/mds-*/; do
  e=$(basename "$d")
  v=$(npm run check --silent -- "$e" 2>&1 | tail -1)
  echo "$e | $v" >> scripts/mds/releves/_tests.txt
done
echo "FIN" >> scripts/mds/releves/_tests.txt
