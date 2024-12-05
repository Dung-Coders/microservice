FROM node

WORKDIR /root/shipping-service

COPY package.json .

RUN yarn install

COPY . .

RUN yarn build

EXPOSE 8080

CMD [ "yarn","yarn:prod" ]

# docker build . -t shipping-service
# docker run -d -p 8080:8080 --name shipping-service --net node-network shipping-service
# docker network connect node-network some-rabbit