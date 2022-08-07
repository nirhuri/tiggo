package com.saver.system.transaction.service.domain.valueobject.TransactionStrategy;

import com.saver.system.domain.valueobject.AccountId;
import com.saver.system.domain.valueobject.Money;
import com.saver.system.domain.valueobject.UserId;
import com.saver.system.transaction.service.domain.valueobject.TransactionAddress;
import com.saver.system.transaction.service.domain.valueobject.TransactionType;

public class CreditCardTransaction extends TransactionStrategy {
    public CreditCardTransaction(UserId userId, AccountId accountId, TransactionAddress transactionAddress, Money money, TransactionType transactionType) {
        super(userId, accountId, transactionAddress, money, transactionType);
    }

    @Override
    public TransactionType getTransactionType() {
        return TransactionType.CREDIT_CARD;
    }

}
