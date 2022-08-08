package com.saver.system.transaction.service.domain;

import com.saver.system.transaction.service.domain.entity.Transaction;
import com.saver.system.transaction.service.domain.event.TransactionCreatedEvent;

public class TransactionDomainServiceImpl  implements  TransactionDomainService {

    public TransactionCreatedEvent validateAndInitiateTransaction(Transaction transaction) {

         transaction.validate();

        return new TransactionCreatedEvent(transaction);
    }

}
