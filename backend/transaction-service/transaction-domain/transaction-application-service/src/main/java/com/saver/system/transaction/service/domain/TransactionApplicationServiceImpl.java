package com.saver.system.transaction.service.domain;

import com.saver.system.transaction.service.domain.dto.create.CreateTransactionCommand;
import com.saver.system.transaction.service.domain.dto.create.CreateTransactionResponse;
import com.saver.system.transaction.service.domain.ports.input.service.TransactionApplicationService;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;

@Validated
@Service
public class TransactionApplicationServiceImpl  implements TransactionApplicationService
{
    private final TransactionCreateCommandHandler transactionCreateCommandHandler;

    public TransactionApplicationServiceImpl(TransactionCreateCommandHandler transactionCreateCommandHandler) {
        this.transactionCreateCommandHandler = transactionCreateCommandHandler;
    }
    public CreateTransactionResponse createTransaction( CreateTransactionCommand createTransactionCommand) {
        return transactionCreateCommandHandler.createTransaction(createTransactionCommand);
    }
}

