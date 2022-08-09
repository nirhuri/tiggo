package com.saver.system.transaction.service.domain.mapper;

import com.saver.system.domain.valueobject.AccountId;
import com.saver.system.domain.valueobject.Money;
import com.saver.system.domain.valueobject.UserId;
import com.saver.system.transaction.service.domain.dto.create.CreateTransactionCommand;
import com.saver.system.transaction.service.domain.dto.create.CreateTransactionResponse;
import com.saver.system.transaction.service.domain.entity.Transaction;
import com.saver.system.transaction.service.domain.valueobject.TransactionAddress;
import org.springframework.stereotype.Component;

@Component
public class TransactionDataMapper {
    public Transaction createTransactionCommandToOrder(CreateTransactionCommand createTransactionCommand) {
        return Transaction.builder()
                .amount(new Money(createTransactionCommand.getTransactionAmount()))
                .category(createTransactionCommand.getCategory())
                .accountId(new AccountId(createTransactionCommand.getAccountId()))
                .transactionAddress((createTransactionCommand.getAddress()))
                .userId(new UserId(createTransactionCommand.getUserId()))
                .transactionType(createTransactionCommand.getTransactionType())
                .build();
    }
    public CreateTransactionResponse transactionToCreateTransactionResponse(Transaction transaction, String message) {
        return CreateTransactionResponse.builder()
                .transactionAmount(transaction.getMoney())
                .accountId(transaction.getAccountId().getValue())
                .transactionAddress(transaction.getTransactionAddress())
                .userId(transaction.getUserId().getValue())
                .message(message)
                .build();
    }
}
