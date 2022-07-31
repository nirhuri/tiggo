package com.saver.system.transaction.service.domain.entity;

import com.saver.system.domain.valueobject.AccountId;
import com.saver.system.domain.valueobject.Money;
import com.saver.system.domain.valueobject.UserId;
import com.saver.system.transaction.service.domain.valueobject.TransactionAddress;

public class CashTransaction extends Transaction {
    public CashTransaction(UserId userId, AccountId accountId, TransactionAddress transactionAddress, Money money) {
        super(userId, accountId, transactionAddress, money);
    }


}
