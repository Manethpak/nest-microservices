import { Inject, Injectable } from '@nestjs/common';
import { NOTIFICATION_QUEUE } from './constants/service';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(@Inject(NOTIFICATION_QUEUE) private notiClient: ClientProxy) {}

  getHello(): string {
    this.notiClient.emit('hello', 'Hello World!');
    return 'Hello World!';
  }
}
