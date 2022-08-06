package com.saver.system.transaction.service.dataaccess.cash.transaction.mapper;

import com.saver.system.transaction.service.dataaccess.cash.transaction.entity.CashTransactionEntity;
import com.saver.system.transaction.service.dataaccess.cash.transaction.entity.TransactionAddressEntity;
import com.saver.system.transaction.service.domain.entity.Transaction;
import com.saver.system.transaction.service.domain.valueobject.TransactionAddress;
import org.springframework.stereotype.Component;

@Component
public class CashTransactionAccessMapper {
    public CashTransactionEntity cashTransactionToCashTransactionEntity(Transaction transaction) {
        CashTransactionEntity cashTransactionEntity = CashTransactionEntity.builder()
                .id(transaction.getId().getValue())
                .userId(transaction.getUserId().getValue())
                .accountId(transaction.getAccountId().getValue())
                .transactionAmount(transaction.getMoney().getAmount())
                .transactionType(transaction.getTransactionType())
                .transactionAddress(transactionAddressToAddressEntity(transaction.getTransactionAddress()))
                .build();

        cashTransactionEntity.getTransactionAddress().setTransaction(cashTransactionEntity);

        return cashTransactionEntity;
    }

    private TransactionAddressEntity transactionAddressToAddressEntity(TransactionAddress transactionAddress) {
        return TransactionAddressEntity.builder()
                .id(transactionAddress.getId())
                .businessName(transactionAddress.getBusinessName())
                .build();
    }
}
