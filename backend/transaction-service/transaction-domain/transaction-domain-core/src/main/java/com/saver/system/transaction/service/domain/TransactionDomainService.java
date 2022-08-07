package com.saver.system.transaction.service.domain;

import com.saver.system.transaction.service.domain.entity.Transaction;
import com.saver.system.transaction.service.domain.event.TransactionCreatedEvent;

public interface TransactionDomainService {
    TransactionCreatedEvent validateAndInitiateTransaction(Transaction transaction);
}
