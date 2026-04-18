lint:
	npx eslint .

fix:
	npx eslint . --fix

format:
	npx prettier --write .

format-check:
	npx prettier --check .