import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { RmqContext, Transport } from '@nestjs/microservices';

@Injectable()
export class RmqService {
  constructor(private configService: ConfigService) {}

  getOptions(queue: string, noAck = false) {
    return {
      transport: Transport.RMQ,
      options: {
        urls: [this.configService.get<string>('RMQ_URL')],
        queue: this.configService.get<string>(`RMQ_${queue}_QUEUE`),
        noAck,
      },
    };
  }

  ack(context: RmqContext) {
    const channel = context.getChannelRef();
    const message = context.getMessage();
    channel.ack(message);
  }
}
