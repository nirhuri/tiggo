package com.saver.system.transaction.service.domain.entity;

import com.saver.system.transaction.service.domain.valueobject.TransactionType;

public class CreditCardTransaction extends Transaction {
    public CreditCardTransaction(Builder builder) {
        super(builder);
    }

    public TransactionType getTransactionType() {
        return TransactionType.CREDIT_CARD;
    }

}
