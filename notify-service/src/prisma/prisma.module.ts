import { Global, Module } from '@nestjs/common';
import { PrismaMysqlService } from './prisma.service';

@Global()
@Module({
    providers: [PrismaMysqlService],
    exports: [PrismaMysqlService]
})


export class PrismaModule {}
