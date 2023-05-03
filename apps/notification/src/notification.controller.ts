import { Controller } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { Ctx, EventPattern, Payload, RmqContext } from '@nestjs/microservices';
import { RmqService } from '@app/rmq';

@Controller()
export class NotificationController {
  constructor(
    private readonly notificationService: NotificationService,
    private readonly rmqService: RmqService,
  ) {}

  @EventPattern('hello')
  async getHello(@Payload() data: string, @Ctx() context: RmqContext) {
    this.notificationService.sendNotification(data);
    this.rmqService.ack(context);
  }
}
