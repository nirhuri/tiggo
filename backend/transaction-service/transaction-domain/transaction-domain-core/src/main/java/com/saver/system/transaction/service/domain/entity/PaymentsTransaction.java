package com.saver.system.transaction.service.domain.entity;

import com.saver.system.transaction.service.domain.valueobject.TransactionType;

public class PaymentsTransaction extends Transaction {
    public PaymentsTransaction(Builder builder) {
        super(builder);
    }

    public TransactionType getTransactionType() {
        return TransactionType.PAYMENTS;
    }
}
