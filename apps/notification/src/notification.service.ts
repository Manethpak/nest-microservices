import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class NotificationService {
  sendNotification(data: string): void {
    Logger.log(data, 'NotificationService');
  }
}
