import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';

@Injectable()
export class AppService {
  constructor(private readonly prismaService:PrismaService){}

  async shipping(data){
    let {order_id, email, full_name, phone, address} = data;

    let shipping_data = await this.prismaService.shipping.create({
      data:{order_id, email, full_name, phone, address}
    })
  
    return shipping_data;
  }
}
