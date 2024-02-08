default: build

build:
	npm run docs:build
sync:
	rsync -r docs/.vitepress/dist/ voteit:/docker/site_voteit_se/dist
publish: build sync
