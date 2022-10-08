import { Message } from 'node-nats-streaming';
import { Listener } from '../../../../../libraries/nats-streaming/listener';
import { Subjects } from '../../../../../libraries/nats-streaming/subjects';
import { UserCreatedEvent } from '../../../../../libraries/nats-streaming/events/user-created-event';

export class UserCreatedListener extends Listener<UserCreatedEvent> {
  readonly subject = Subjects.UserCreated;

  queueGroupName = 'accounts-service';

  onMessage(data: UserCreatedEvent['data'], msg: Message) {
    console.log('Event data: ', data);

    msg.ack();
  }
}
