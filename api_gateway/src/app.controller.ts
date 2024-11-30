import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
    @Inject("PRODUCT_NAME") private productService:ClientProxy
  ) {}

  @Get("/get-product")
  async getHello(){
    let dataProduct = await lastValueFrom(this.productService.send("get_product","hello"))
    return dataProduct;
  }
}
