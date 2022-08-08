package com.saver.system.transaction.service.domain.entity;

import com.saver.system.domain.entity.AggregateRoot;
import com.saver.system.domain.valueobject.AccountId;
import com.saver.system.domain.valueobject.Money;
import com.saver.system.domain.valueobject.TransactionId;
import com.saver.system.domain.valueobject.UserId;
import com.saver.system.transaction.service.domain.exception.TransactionDomainException;
import com.saver.system.transaction.service.domain.valueobject.TransactionAddress;
import com.saver.system.transaction.service.domain.valueobject.TransactionType;
import com.saver.system.transaction.service.domain.valueobject.TransactionStrategy.TransactionStrategy;

//fgfgf
public abstract class Transaction extends AggregateRoot<TransactionId> {
    private final UserId userId;
    private final AccountId accountId;
    private final TransactionAddress transactionAddress;
    private final Money amount;
    private final TransactionType transactionType;

    public Transaction(UserId userId, AccountId accountId, TransactionAddress transactionAddress, Money amount,
            TransactionType transactionType) {
        this.userId = userId;
        this.accountId = accountId;
        this.transactionAddress = transactionAddress;
        this.amount = amount;
        this.transactionType = transactionType;
    }

    public AccountId getAccountId() {
        return accountId;
    }

    public UserId getUserId() {
        return userId;
    }

    public Money getMoney() {
        return amount;
    }

    public TransactionAddress getTransactionAddress() {
        return transactionAddress;
    }

    public TransactionType getTransactionType() {
        return transactionType;
    }

    public void validate() {

        validateTotalAmount();
    }
    private  void validateTotalAmount(){
        if (amount == null || !amount.isGreaterThanZero()) {
            throw new TransactionDomainException("money amount must be greater than zero!");
        }
    }
}
