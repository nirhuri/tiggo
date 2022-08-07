package com.saver.system.transaction.service.domain.event;

import com.saver.system.transaction.service.domain.entity.Transaction;

public class TransactionCreatedEvent extends TransactionEvent {
    public TransactionCreatedEvent(Transaction transaction) {
        super(transaction);
    }
}
