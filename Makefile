#Makefile
install:
	npm install
start:
	node src/bin/brain-games.js
even:
	node src/bin/brain-even.js
calc:
	node src/bin/brain-calc.js
gcd:
	node src/bin/brain-gcd.js
progression:
	node src/bin/brain-progression.js
prime:
	node src/bin/brain-prime.js
publish:
	npm publish --dry-run
lint:
	npx eslint .