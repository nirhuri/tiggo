package com.saver.system.transaction.service.domain.entity;

import com.saver.system.domain.valueobject.AccountId;
import com.saver.system.domain.valueobject.Money;
import com.saver.system.domain.valueobject.TransactionId;
import com.saver.system.domain.valueobject.UserId;
import com.saver.system.transaction.service.domain.valueobject.TransactionAddress;
import com.saver.system.transaction.service.domain.valueobject.TransactionType;

public class CashTransaction extends Transaction {

    private CashTransaction(Builder builder) {
        super(builder);
       this.transactionType = TransactionType.CASH;
    }

    @Override
    public TransactionType getTransactionType() {
        return TransactionType.CASH;
    }

}
