import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class AppService {
  constructor(private readonly prismaService:PrismaClient,
    @Inject("NOTIFY_NAME") private notifyService: ClientProxy
  ){}
  
  async shipping(data){
    let {order_id, email, full_name, phone, address} = data;

    let shipping_data = await this.prismaService.shipping.create({
      data:{order_id, email, full_name, phone, address}
    })
  
    this.notifyService.emit("success_order",email);
    
    return shipping_data;
  }
}
