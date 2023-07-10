#!/bin/bash

DEPLOY_SERVER="94.250.250.194"
SERVER_FOLDER="otlivchik"

# Building React output
#yarn install
#yarn run build

echo "Deploying to ${DEPLOY_SERVER}"
scp -r ../otl-client rathet@${DEPLOY_SERVER}:/home/rathet/apps/${SERVER_FOLDER}/
echo "Finished copying the build files"
ssh rathet@${DEPLOY_SERVER} 'cd ~/apps/otlivchik/otl-client'
ssh rathet@${DEPLOY_SERVER} 'pwd'
ssh rathet@${DEPLOY_SERVER} 'docker stop $(docker ps -q --filter ancestor=rathet/otlc:latest )'
ssh rathet@${DEPLOY_SERVER} 'docker rmi --force $(docker images -q "rathet/otlc" | uniq)'
ssh rathet@${DEPLOY_SERVER} 'docker build --no-cache -t rathet/otlc ~/apps/otlivchik/otl-client'
echo "Finished building docker"
ssh rathet@${DEPLOY_SERVER} 'docker run -d -t -p 4001:4001 --volumes-from backend  rathet/otlc:latest'
echo "Container started"

