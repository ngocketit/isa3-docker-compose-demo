This demo shows how to build services and make them talk to each other using docker-compose. In order to run:

1. You need to have Docker installed on your machine. For how to do it, check https://docs.docker.com/get-docker/
2. From the root folder, run: `docker-compose up` which will build the Docker images for both services, run them as containers in the correct order (due to dependencies)
3. Now you can make request to each service. For example: `curl localhost:9002/greet/Yourname`. In this demo, greet service is calling to calculator service to get the sum of 2 numbers. Test it by calling: `curl localhost:9002/add/2/6`
4. You can change the code as you wish but you need to stop `docker-compose` from the above command (e.g, `docker-compose up`) by pressing ctrl + c. And then rerun it with `--build` flag in order to force it rebuild the images: `docker-compose up --build`
