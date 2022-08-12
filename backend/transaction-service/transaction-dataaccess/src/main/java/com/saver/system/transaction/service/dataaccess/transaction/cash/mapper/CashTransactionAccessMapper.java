package com.saver.system.transaction.service.dataaccess.transaction.cash.mapper;

import com.saver.system.domain.valueobject.AccountId;
import com.saver.system.domain.valueobject.Money;
import com.saver.system.domain.valueobject.TransactionId;
import com.saver.system.domain.valueobject.UserId;
import com.saver.system.transaction.service.dataaccess.transaction.cash.entity.CashTransactionEntity;
import com.saver.system.transaction.service.dataaccess.transaction.cash.entity.TransactionAddressEntity;
import com.saver.system.transaction.service.domain.entity.Transaction;
import com.saver.system.transaction.service.domain.valueobject.TransactionAddress;
import com.saver.system.transaction.service.domain.entity.CashTransaction;
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

    public CashTransaction cashTransactionEntityToCashTransaction(CashTransactionEntity cashTransactionEntity) {
        return (CashTransaction) CashTransaction.builder()
                .transactionId(new TransactionId(cashTransactionEntity.getId()))
                .userId(new UserId(cashTransactionEntity.getUserId()))
                .accountId(new AccountId(cashTransactionEntity.getAccountId()))
                .transactionAddress(transactionAddressEntityToTransactionAddress(cashTransactionEntity.getTransactionAddress()))
                .amount(new Money(cashTransactionEntity.getTransactionAmount())).build();
    }

    private TransactionAddressEntity transactionAddressToAddressEntity(TransactionAddress transactionAddress) {
        return TransactionAddressEntity.builder()
                .id(transactionAddress.getId())
                .businessName(transactionAddress.getBusinessName())
                .build();
    }

    private TransactionAddress transactionAddressEntityToTransactionAddress(TransactionAddressEntity address) {
        return new TransactionAddress(address.getId(),
                address.getBusinessName());
    }
}
