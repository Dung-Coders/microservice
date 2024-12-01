import { Inject, Injectable } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { lastValueFrom } from 'rxjs';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(private readonly prismaService: PrismaService,
    @Inject("SHIPPING_NAME") private notifyService: ClientProxy
  ){}

  async getProduct(){
    return await this.prismaService.product.findMany();
  }

  async orders(data){
    let {product_id, user_id} = data;
    let order_data = await this.prismaService.orders.create({
      data:{product_id, user_id}
    })

    if (order_data) {
      //saving shipping => service shipping
      let shipping_data = await lastValueFrom(
        this.notifyService.send('shipping_product', {order_id: order_data.orders_id})
      );
    }

    return order_data;
  }
}
