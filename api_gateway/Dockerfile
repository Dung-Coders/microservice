FROM node

WORKDIR /root/api-gateway

COPY package.json .

RUN yarn install

COPY . .

RUN yarn build

EXPOSE 8080

CMD [ "yarn","yarn:prod" ]

# docker build . -t api-gateway
# docker run -d -p 8080:8080 --name api-gateway --net node-network api-gateway
# docker network connect node-network some-rabbit