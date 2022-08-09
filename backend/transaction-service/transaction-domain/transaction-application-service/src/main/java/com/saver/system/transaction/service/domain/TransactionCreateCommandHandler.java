package com.saver.system.transaction.service.domain;

import com.saver.system.transaction.service.domain.dto.create.CreateTransactionCommand;
import com.saver.system.transaction.service.domain.dto.create.CreateTransactionResponse;
import com.saver.system.transaction.service.domain.entity.Transaction;
import com.saver.system.transaction.service.domain.event.TransactionCreatedEvent;
import com.saver.system.transaction.service.domain.mapper.TransactionDataMapper;
import lombok.extern.slf4j.Slf4j;

@Slf4j
public class TransactionCreateCommandHandler {
    private final TransactionDataMapper transactionDataMapper;
    private final TransactionDomainServiceImpl transactionDomainService;

    TransactionCreateCommandHandler(TransactionDataMapper transactionDataMapper , TransactionDomainServiceImpl transactionDomainService) {
        this.transactionDataMapper = transactionDataMapper;
        this.transactionDomainService = transactionDomainService;
    }
    public CreateTransactionResponse createTransaction(CreateTransactionCommand createOrderCommand) {
        Transaction transaction = transactionDataMapper.createTransactionCommandToOrder(createOrderCommand);
        TransactionCreatedEvent orderCreatedEvent = transactionDomainService.validateAndInitiateTransaction(transaction);
        //  saveTransaction(transaction);

        log.info("Transaction created: {}", transaction);
        return transactionDataMapper.transactionToCreateTransactionResponse(orderCreatedEvent.getTransaction(),
                "transaction created successfully");
    }
//    private Transaction saveTransaction(Transaction transaction) {
//        Transaction transactionResult = transactionRepository.save(order);
//        if (transactionResult == null) {
//            log.error("Could not save order!");
//            throw new TransactionDomainException("Could not save order!");
//        }
//        log.info("Order is saved with id: {}", transactionResult.getId().getValue());
//        return transactionResult;
//    }
}
