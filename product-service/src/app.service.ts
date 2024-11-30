import { Injectable } from '@nestjs/common';
import { PrismaMysqlService } from './prisma/prisma.service';

@Injectable()
export class AppService {
  constructor(private readonly prismaService:PrismaMysqlService){}

  async getProduct(){
    let products = await this.prismaService.product.findMany();
    return products;
  }
}
