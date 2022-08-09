package com.saver.system.transaction.service.domain.valueobject.TransactionStrategy;

import com.saver.system.domain.valueobject.AccountId;
import com.saver.system.domain.valueobject.Money;
import com.saver.system.domain.valueobject.UserId;
import com.saver.system.transaction.service.domain.entity.Transaction;
import com.saver.system.transaction.service.domain.valueobject.TransactionAddress;
import com.saver.system.transaction.service.domain.valueobject.TransactionType;

public abstract class TransactionStrategy  {

   abstract public TransactionType getTransactionType();
}
