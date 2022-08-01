package com.saver.system.transaction.service.domain.valueobject.transactionStrategy;

import com.saver.system.transaction.service.domain.valueobject.TransactionType;

public class TransactionPayments extends TransactionStrategy {
    @Override
    public TransactionType getTransactionType() {
        return TransactionType.PAYMENTS;
    }
}
