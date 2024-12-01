import { Inject, Injectable } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(private readonly prismaService:PrismaService,
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
