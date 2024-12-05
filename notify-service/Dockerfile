FROM node

WORKDIR /root/nofity-service

COPY package.json .

RUN yarn install

COPY . .

RUN yarn build

EXPOSE 8080

CMD [ "yarn","yarn:prod" ]

# docker build . -t nofity-service
# docker run -d -p 8080:8080 --name nofity-service --net node-network nofity-service
# docker network connect node-network some-rabbit