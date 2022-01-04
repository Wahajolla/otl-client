#!/bin/bash

DEPLOY_SERVER="93.157.110.76"
SERVER_FOLDER="otlivchik"

# Building React output
#yarn install
#yarn run build

echo "Deploying to ${DEPLOY_SERVER}"
scp -r ../otl-client rathet@${DEPLOY_SERVER}:~/apps/${SERVER_FOLDER}/
echo "Finished copying the build files"
ssh rathet@${DEPLOY_SERVER} 'cd ~/apps/otlivchik/otl-client'
ssh rathet@${DEPLOY_SERVER} 'pwd'
ssh rathet@${DEPLOY_SERVER} 'docker stop $(docker ps -q --filter ancestor=rathet/otlc:latest )'
ssh rathet@${DEPLOY_SERVER} 'docker rmi --force $(docker images -q "rathet/otlc" | uniq)'
ssh rathet@${DEPLOY_SERVER} 'docker build --no-cache -t rathet/otlc ~/apps/otlivchik/otl-client'
echo "Finished building docker"
ssh rathet@${DEPLOY_SERVER} 'docker run -d -t -p 3001:3001  rathet/otlc:latest'
echo "Container started"

