import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern("get_product")
  getProduct(@Payload() data){
    
    return this.appService.getProduct();
  }

  @MessagePattern("shipping_product")
  orders(@Payload() data){

    return this.appService.orders(data);
  }
}
