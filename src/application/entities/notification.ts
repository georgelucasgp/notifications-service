export interface NotificationProps {
  recipientId: string;
  content: string;
  category: string;
  readAt?: Date | null;
  createdAt: Date;
}
export class Notification {
  private props: NotificationProps;

  constructor(props: NotificationProps) {
    this.props = props;
  }

  get content(): string {
    return this.props.content;
  }
  set content(value: string) {
    this.props.content = value;
  }
  get category(): string {
    return this.props.category;
  }
  set category(value: string) {
    this.props.category = value;
  }
}
