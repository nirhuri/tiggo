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
public  class Transaction extends AggregateRoot<TransactionId> {
    private final UserId userId;
    private final AccountId accountId;
    private final TransactionAddress transactionAddress;
    private final Money amount;
    private final TransactionType transactionType;
    private final TransactionStrategy transactionStrategy;
    private  final  String Category;

    public Transaction(Builder builder) {
        super.setId(builder.transactionId);
        this.userId = builder.userId;
        this.accountId = builder.accountId;
        this.transactionAddress = builder.transactionAddress;
        this.amount = builder.amount;
        this.transactionType = builder.transactionType;
        this.transactionStrategy = builder.transactionStrategy;
        this.Category = builder.category;
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

    public TransactionStrategy getTransactionStrategy() {
        return transactionStrategy;
    }
    public String getCategory() {
        return Category;
    }

    public void validate() {

        validateTotalAmount();
    }
    private  void validateTotalAmount(){
        if (amount == null || !amount.isGreaterThanZero()) {
            throw new TransactionDomainException("money amount must be greater than zero!");
        }
    }

    public static Builder builder() {
        return new Builder();
    }
    public static class Builder {

        private UserId userId;
        private AccountId accountId;
        private TransactionAddress transactionAddress;
        private Money amount;
        private TransactionType transactionType;
        private TransactionStrategy transactionStrategy;
        private TransactionId transactionId;

        private String category;
        public Builder userId(UserId userId) {
            this.userId = userId;
            return this;
        }
        public Builder accountId(AccountId accountId) {
            this.accountId = accountId;
            return this;
        }

        public Builder transactionAddress(TransactionAddress transactionAddress) {
            this.transactionAddress = transactionAddress;
            return this;
        }
        public Builder amount(Money amount) {
            this.amount = amount;
            return this;
        }
        public Builder transactionType(TransactionType transactionType) {
            this.transactionType = transactionType;
            return this;
        }
        public Builder transactionStrategy(TransactionStrategy transactionStrategy) {
            this.transactionStrategy = transactionStrategy;
            return this;
        }
        public Builder transactionId(TransactionId transactionId) {
            this.transactionId = transactionId;
            return this;
        }
        public Builder category(String category) {
            this.category = category;
            return this;
        }
        public Transaction build() {
            return new Transaction(this);
        }

    }

}
