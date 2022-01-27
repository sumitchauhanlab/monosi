build-api:
	cd ../; docker build -f deployment/docker/Dockerfile.api -t monosi-api .

run-api:
	docker run --rm -p 5000:5000 monosi-api

build-client:
	cd ../; docker build -f deployment/docker/Dockerfile.client -t monosi-client .

build-simple:
	cd ../; docker build -f deployment/docker/Dockerfile.simple -t monosi-simple .

run-simple:
	docker run --rm -p 3000:3000 monosi-simple

build:
	cd docker; docker-compose build

run:
	cd docker; docker-compose up
