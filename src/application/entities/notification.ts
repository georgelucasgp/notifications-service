import { randomUUID } from 'crypto';
import { Replace } from './../../helpers/Replace';
import { Content } from './content';
export interface NotificationProps {
  recipientId: string;
  content: Content;
  category: string;
  readAt?: Date | null;
  createdAt: Date;
}
export class Notification {
  private _id: string;
  private props: NotificationProps;

  constructor(props: Replace<NotificationProps, { createdAt?: Date }>) {
    this._id = randomUUID();
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
    };
  }

  get id(): string {
    return this._id;
  }
  get recipientId(): string {
    return this.props.recipientId;
  }
  set recipientId(value: string) {
    this.props.recipientId = value;
  }
  get content(): Content {
    return this.props.content;
  }
  set content(content: Content) {
    this.props.content = content;
  }
  get category(): string {
    return this.props.category;
  }
  set category(value: string) {
    this.props.category = value;
  }
  get readAt(): Date | null | undefined {
    return this.props.readAt;
  }
  set readAt(value: Date | null | undefined) {
    this.props.readAt = value;
  }
  get createdAt(): Date {
    return this.props.createdAt;
  }
}
