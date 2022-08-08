package com.saver.system.transaction.service.domain.entity;

import com.saver.system.domain.entity.AggregateRoot;
import com.saver.system.domain.valueobject.AccountId;
import com.saver.system.domain.valueobject.Money;
import com.saver.system.domain.valueobject.TransactionId;
import com.saver.system.domain.valueobject.UserId;
import com.saver.system.transaction.service.domain.valueobject.TransactionAddress;
import com.saver.system.transaction.service.domain.valueobject.TransactionDataType;
import com.saver.system.transaction.service.domain.valueobject.TransactionType;
import com.saver.system.transaction.service.domain.valueobject.TransactionStrategy.TransactionStrategy;

//fgfgf
public abstract class Transaction extends AggregateRoot<TransactionId> {
    private final UserId userId;
    private final AccountId accountId;
    private final TransactionAddress transactionAddress;
    private final Money money;
    private final TransactionType transactionType;

    private final TransactionDataType transactionDataType;


    public Transaction(UserId userId, AccountId accountId, TransactionAddress transactionAddress, Money money,
            TransactionType transactionType , TransactionDataType transactionDataType) {
        this.userId = userId;
        this.accountId = accountId;
        this.transactionAddress = transactionAddress;
        this.money = money;
        this.transactionType = transactionType;
        this.transactionDataType = transactionDataType;
    }

    public void validateTransaction() {
        if (userId == null) {
            throw new IllegalArgumentException("UserId cannot be null");
        }
        if (accountId == null) {
            throw new IllegalArgumentException("AccountId cannot be null");
        }
    }

    public AccountId getAccountId() {
        return accountId;
    }

    public UserId getUserId() {
        return userId;
    }

    public Money getMoney() {
        return money;
    }

    public TransactionAddress getTransactionAddress() {
        return transactionAddress;
    }

    public TransactionType getTransactionType() {
        return transactionType;
    }
    public  TransactionDataType getTransactionDataType() {
        return transactionDataType;
    }
}
