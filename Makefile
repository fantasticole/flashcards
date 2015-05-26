./public/bundle.js: ./src/views/flashcards.js
# $@ = ./public/bundle.js
# $^ = ./src/views/flashcards.js
	./node_modules/.bin/browserify -t reactify $^ -o $@