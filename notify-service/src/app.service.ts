import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import * as nodemailer from 'nodemailer';

@Injectable()
export class AppService {
  constructor(private readonly prismaService: PrismaService){}

  sendMailConfirm(data){
    //sending mail to user
    let configMail = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'vandung1916@gmail.com',
        pass: 'your app passwork key',
      },
    });
    let infoMail = {
      from: 'vandung1916@gmail.com',
      to: data, // "khaitruong2112@gmail.com"
      subject: 'Đặt hàng qua Amazon',
      html: '<h1> Xác nhận đợn hàng thành công </h1>',
    };

    configMail.sendMail(infoMail, (error) => error);
  }

  sendMailSuccess(data){
    let configMail = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'vandung1916@gmail.com',
        pass: 'your app passwork key',
      },
    });
     //mail sended successfully
     let infoMail = {
      from: 'vandung1916@gmail.com',
      to: data, // "khaitruong2112@gmail.com"
      subject: 'Odered products from Amazon',
      html: '<h1> Xác nhận đợn hàng thành công </h1>',
    };

    configMail.sendMail(infoMail, (error) => error);
  }
}
