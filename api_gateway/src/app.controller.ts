import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { ClientProxy } from '@nestjs/microservices';
import { catchError, lastValueFrom, of, retry, timeout } from 'rxjs';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
    @Inject("PRODUCT_NAME") private productService:ClientProxy,
    @Inject("NOTIFY_NAME") private nofifyService:ClientProxy,
    @Inject("SHIPPING_NAME") private shippingService:ClientProxy
  ) {}

  @Get("/get-product")
  async getHello(){
    let dataProduct = await lastValueFrom(this.productService.send("get_product","hello"))
    return dataProduct;
  }

  @Post("/order")
  async order(@Body() order){
    let {email, product_id, user_id, full_name, phone, address} = order;

    //sending mail to declare ordered products
    await this.nofifyService.emit("confirm_product", email).pipe(
      timeout(5000),
      retry(3),
      catchError(err=>{
        return of("Server notify not active")
      })
    );

    //saving orders
    let order_product = await lastValueFrom(this.productService.send("order_key", order))

    return "Your ordered products successfully.!"
  }
}
