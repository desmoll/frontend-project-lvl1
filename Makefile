#Makefile
install:
	npm install
start:
	npx node src/bin/brain-games.js
even:
	npx node src/bin/brain-even.js
calc:
	npx node src/bin/brain-calc.js
gcd:
	npx node src/bin/brain-gcd.js
progression:
	npx node src/bin/brain-progression.js
publish:
	npm publish --dry-run
lint:
	npx eslint .