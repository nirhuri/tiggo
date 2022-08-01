package com.saver.system.transaction.service.domain.entity;

import com.saver.system.domain.entity.AggregateRoot;
import com.saver.system.domain.valueobject.AccountId;
import com.saver.system.domain.valueobject.Money;
import com.saver.system.domain.valueobject.TransactionId;
import com.saver.system.domain.valueobject.UserId;
import com.saver.system.transaction.service.domain.valueobject.TransactionAddress;
import com.saver.system.transaction.service.domain.valueobject.TransactionType;
import com.saver.system.transaction.service.domain.valueobject.transactionStrategy.TransactionStrategy;

public abstract class Transaction extends AggregateRoot<TransactionId> {
    private final UserId userId;
    private final AccountId accountId;
    private final TransactionAddress transactionAddress;
    private final Money money;
    private final TransactionStrategy transactionType;
    public Transaction(UserId userId, AccountId accountId, TransactionAddress transactionAddress, Money money, TransactionStrategy transactionType) {
        this.userId = userId;
        this.accountId = accountId;
        this.transactionAddress = transactionAddress;
        this.money = money;
        this.transactionType = transactionType;
    }
    public TransactionType getTransactionType() {
        return transactionType.getTransactionType();
    }
}
