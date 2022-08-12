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

//    public static Transaction.Builder builder() {
//        return new Builder();
//    }
//
//    public static final class Builder extends Transaction.Builder {
//        public TransactionType transactionType;
//        private TransactionId id;
//        private UserId userId;
//        private AccountId accountId;
//        private TransactionAddress transactionAddress;
//        private Money money;
//
//        private Builder() {
//        }
//
//        public Builder id(TransactionId id) {
//            this.id = id;
//            return this;
//        }
//
//        public Builder userId(UserId userId) {
//            this.userId = userId;
//            return this;
//        }
//
//        public Builder accountId(AccountId accountId) {
//            this.accountId = accountId;
//            return this;
//        }
//
//        public Builder transactionAddress(TransactionAddress transactionAddress) {
//            this.transactionAddress = transactionAddress;
//            return this;
//        }
//
//        public Builder money(Money money) {
//            this.money = money;
//            return this;
//        }
//
//        public CashTransaction build() {
//            CashTransaction transaction = new CashTransaction(this);
//            transaction.setId(id);
//            return transaction;
//        }
//    }
}
