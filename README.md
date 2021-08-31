## Docker Infrastructure

Extremely basic [Docker](https://www.docker.com/) infrastructure separating a [React](https://reactjs.org/) front-end with [Nodejs](https://nodejs.org/en/)/[Express](https://expressjs.com/) back-end and [MySQL](https://www.mysql.com/)([MySQL2](https://www.npmjs.com/package/mysql2)) database working independently on the same custom Docker network.

###### Create custom docker network:
```
docker network create --driver bridge test-network 
```

###### Build each image:
```
docker build -t docker-client ./client
docker build -t docker-server ./server
docker build -t docker-db ./db
```

###### Run each container from the images:
```
docker run -ditp 3000:3000 --name docker-client --network test-network docker-client
docker run -ditp 5000:5000 --name docker-server --restart on-failure --network test-network docker-server
docker run -ditp 3306:3306 --name docker-db --network test-network  -e MYSQL_ROOT_PASSWORD=1234 docker-db
```