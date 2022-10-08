import { Publisher } from '../../../../../libraries/nats-streaming/publisher';
import { Subjects } from '../../../../../libraries/nats-streaming/subjects';
import { AccountCreatedEvent } from '../../../../../libraries/nats-streaming/events/account-created-event';

export class AccountCreatedPublisher extends Publisher<AccountCreatedEvent> {
  readonly subject = Subjects.AccountCreated;
}
