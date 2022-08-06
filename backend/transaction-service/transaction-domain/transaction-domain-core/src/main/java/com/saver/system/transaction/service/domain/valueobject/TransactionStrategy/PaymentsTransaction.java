package com.saver.system.transaction.service.domain.valueobject.TransactionStrategy;

import com.saver.system.transaction.service.domain.valueobject.TransactionType;

public class PaymentsTransaction extends TransactionStrategy {
    @Override
    public TransactionType getTransactionType() {
        return TransactionType.PAYMENTS;
    }
}
