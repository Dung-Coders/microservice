import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([{
      name:"PRODUCT_NAME",
      transport: Transport.RMQ,
      options:{
        urls:["amqp://admin:1234@some-rabbit:5672"],
        queue:"product_queue",
        queueOptions:{
          durable:true //keep queue when RabbitMQ restarts
        },
        persistent:true //keep message
      }
    },
    {
      name:"SHIPPING_NAME",
      transport: Transport.RMQ,
      options:{
        urls:["amqp://admin:1234@some-rabbit:5672"],
        queue:"notify_queue",
        queueOptions:{
          durable:true //keep queue when RabbitMQ restarts
        },
        persistent:true //keep message
      }
    },
    {
      name:"NOTIFY_NAME",
      transport: Transport.RMQ,
      options:{
        urls:["amqp://admin:1234@some-rabbit:5672"],
        queue:"shipping_queue",
        queueOptions:{
          durable:true //keep queue when RabbitMQ restarts
        },
        persistent:true //keep message
      }
    }
  ])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
