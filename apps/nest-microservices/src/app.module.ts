import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RmqModule } from '@app/rmq';
import { ConfigModule } from '@nestjs/config';
import { NOTIFICATION_QUEUE } from './constants/service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    RmqModule.register({ name: NOTIFICATION_QUEUE }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
