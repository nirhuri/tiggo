package com.saver.system.transaction.service.domain.ports.input.service;

import com.saver.system.transaction.service.domain.dto.create.CreateTransactionCommand;
import com.saver.system.transaction.service.domain.dto.create.CreateTransactionResponse;

import javax.validation.Valid;

public interface TransactionApplicationService {
    CreateTransactionResponse createTransaction(@Valid CreateTransactionCommand createTransactionCommand);
}
