#!/bin/bash

echo "building"

docker build -t michaelpeterswa/coordinate-server .
docker push michaelpeterswa/coordinate-server:latest

echo "deploying"

docker stop coordinate
docker rm coordinate

docker pull michaelpeterswa/coordinate-server

docker run -d -p 6970:6968 --name=coordinate --restart=always michaelpeterswa/coordinate-server
docker cp /home/michael/env.txt coordinate:/usr/src/app/.env
docker restart coordinate