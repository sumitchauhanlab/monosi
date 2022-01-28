build-api:
	docker build -f deployment/docker/Dockerfile.api -t msi-api .

run-api:
	docker run --rm -p 5000:5000 msi-api

build-client:
	docker build -f deployment/docker/Dockerfile.client -t msi-client .

build-simple:
	docker build -f deployment/docker/Dockerfile.simple -t msi-simple .

run-simple:
	docker run --rm -p 3000:3000 msi-simple

build:
	cd ./deployment/docker; docker-compose build

run:
	cd ./deployment/docker; docker-compose up
