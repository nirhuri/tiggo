package com.saver.system.transaction.service.domain.valueobject.TransactionStrategy;

import com.saver.system.domain.valueobject.AccountId;
import com.saver.system.domain.valueobject.Money;
import com.saver.system.domain.valueobject.TransactionId;
import com.saver.system.domain.valueobject.UserId;
import com.saver.system.transaction.service.domain.entity.Transaction;
import com.saver.system.transaction.service.domain.valueobject.TransactionAddress;
import com.saver.system.transaction.service.domain.valueobject.TransactionType;

public class CashTransaction extends TransactionStrategy {

    private CashTransaction(Builder builder) {
        super(builder.userId, builder.accountId, builder.transactionAddress, builder.money, TransactionType.CASH);
    }

    @Override
    public TransactionType getTransactionType() {
        return TransactionType.CASH;
    }

    public static Builder builder() {
        return new Builder();
    }

    public static final class Builder {
        private TransactionId id;
        private UserId userId;
        private AccountId accountId;
        private TransactionAddress transactionAddress;
        private Money money;

        private Builder() {
        }

        public Builder id(TransactionId id) {
            this.id = id;
            return this;
        }

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

        public Builder money(Money money) {
            this.money = money;
            return this;
        }


        public CashTransaction build() {
            CashTransaction transaction = new CashTransaction(this);
            transaction.setId(id);
            return transaction;
        }
    }
}
