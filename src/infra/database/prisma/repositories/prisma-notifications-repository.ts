import { Injectable } from '@nestjs/common';
import { NotificationsRepository } from '../../../../application/repositories/notifications-repository';
import { Notification } from '../../../../application/entities/notification';
import { PrismaService } from 'src/infra/prisma.service';

@Injectable()
export class PrismaNotificationsRepository implements NotificationsRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(notification: Notification) {
    await this.prisma.notification.create({
      data: {
        id: notification.id,
        recipientId: notification.recipientId,
        content: notification.content.value,
        category: notification.category,
        readAt: notification.readAt,
        createdAt: notification.createdAt,
      },
    });
  }
}
