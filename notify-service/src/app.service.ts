import { Injectable } from '@nestjs/common';
import { PrismaMysqlService } from './prisma/prisma.service';

@Injectable()
export class AppService {
  constructor(private readonly prismaService:PrismaMysqlService){}

  async getProduct(){
    return await this.prismaService.products.findMany();
  }
}
