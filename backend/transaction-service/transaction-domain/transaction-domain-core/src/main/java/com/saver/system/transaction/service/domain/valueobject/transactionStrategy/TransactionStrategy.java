package com.saver.system.transaction.service.domain.valueobject.transactionStrategy;

import com.saver.system.transaction.service.domain.valueobject.TransactionType;

public abstract class TransactionStrategy {
   abstract public TransactionType getTransactionType();
}
