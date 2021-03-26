#!/bin/bash

echo "building"

docker build -t michaelpeterswa/coordinate-server .
docker push michaelpeterswa/coordinate-server:latest

echo "deploying"

docker stop coordinate
docker rm coordinate

docker pull michaelpeterswa/coordinate-server

docker run -d -p 6969:6968 --name=coordinate --restart=always michaelpeterswa/coordinate
docker cp /home/michael/env.txt backend:/usr/src/app/.env
docker restart coordinate