package com.saver.system.domain.event.publisher;

import com.saver.system.domain.event.DomainEvent;

public interface DomainEventPublisher<T extends DomainEvent> {
    void publish(T domainEvent);
}
