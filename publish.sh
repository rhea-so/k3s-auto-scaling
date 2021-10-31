rm -rf dist
tsc
cp package.json dist
cp README.md dist
cd dist
rm -rf 99_Test
npm publish