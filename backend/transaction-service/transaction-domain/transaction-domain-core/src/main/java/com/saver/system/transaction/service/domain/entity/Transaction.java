package com.saver.system.transaction.service.domain.entity;

import com.saver.system.domain.entity.AggregateRoot;
import com.saver.system.domain.valueobject.AccountId;
import com.saver.system.domain.valueobject.Money;
import com.saver.system.domain.valueobject.TransactionId;
import com.saver.system.domain.valueobject.UserId;
import com.saver.system.transaction.service.domain.valueobject.TransactionAddress;

public abstract class Transaction extends AggregateRoot<TransactionId> {
    private final UserId userId;
    private final AccountId accountId;
    private final TransactionAddress transactionAddress;
    private final Money money;

    public Transaction(UserId userId, AccountId accountId, TransactionAddress transactionAddress, Money money) {
        this.userId = userId;
        this.accountId = accountId;
        this.transactionAddress = transactionAddress;
        this.money = money;
    }
}
