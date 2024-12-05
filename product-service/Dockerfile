FROM node

WORKDIR /root/product-service

COPY package.json .

RUN yarn install

COPY ./src/prisma ./src/prisma

RUN yarn prisma generate --schema src/prisma/schema.prisma

COPY . .

RUN yarn build

EXPOSE 8080

CMD [ "yarn","yarn:prod" ]

# docker build . -t product-service
# docker run -d -p 8080:8080 --name product-service --net node-network product-service
# docker network connect node-network some-rabbit