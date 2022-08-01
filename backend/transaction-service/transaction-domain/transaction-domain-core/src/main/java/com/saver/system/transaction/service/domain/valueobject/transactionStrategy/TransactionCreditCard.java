package com.saver.system.transaction.service.domain.valueobject.transactionStrategy;

import com.saver.system.transaction.service.domain.valueobject.TransactionType;

public class TransactionCreditCard extends TransactionStrategy {
    @Override
    public TransactionType getTransactionType() {
        return TransactionType.CREDIT_CARD;
    }

}
