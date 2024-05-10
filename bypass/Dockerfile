FROM node:14-slim

WORKDIR /app    
ADD . .
RUN npm i
ENTRYPOINT [ "node", "index.js" ]