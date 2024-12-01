import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule,{
    transport:Transport.RMQ,
    options:{
      urls:["amqp://admin:1234@localhost:5672"],
      queue:"notify_queue",
      queueOptions:{
        durable:true //keep queue when RabbitMQ restarts
      },
      persistent:true //keep message
    }
  }
  );
  await app.listen();
}
bootstrap();

//yarn add prisma @prisma/client
//yarn prisma init
//update .env
//yarn prisma db pull
//yarn prisma generate

//yarn add @nestjs/config

//yarn add @nestjs/microservices amqplib amqp-connection-manager

//yarn prisma db pull --schema ./src/prisma/schema.prisma
//yarn prisma generate --schema ./src/prisma/schema.prisma
