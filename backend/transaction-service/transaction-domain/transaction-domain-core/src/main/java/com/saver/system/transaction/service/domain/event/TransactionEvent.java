package com.saver.system.transaction.service.domain.event;

import com.saver.system.domain.event.DomainEvent;
import com.saver.system.transaction.service.domain.entity.Transaction;

public abstract class TransactionEvent implements DomainEvent<Transaction> {
    private final Transaction transaction;
    public TransactionEvent(Transaction transaction) {
        this.transaction = transaction;

    }
    public Transaction getTransaction() {
        return transaction;
    }
}
