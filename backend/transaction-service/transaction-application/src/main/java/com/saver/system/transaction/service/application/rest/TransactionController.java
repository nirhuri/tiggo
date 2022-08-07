package com.saver.system.transaction.service.application.rest;


import com.saver.system.transaction.service.domain.dto.create.CreateTransactionCommand;
import com.saver.system.transaction.service.domain.dto.create.CreateTransactionResponse;
import com.saver.system.transaction.service.domain.ports.input.service.TransactionApplicationService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
@RequestMapping(value = "/transactions", produces = "application/vnd.api.v1+json")
public class TransactionController {

    private final TransactionApplicationService transactionApplicationService;

    public TransactionController(TransactionApplicationService transactionApplicationService) {
        this.transactionApplicationService = transactionApplicationService;
    }
    @PostMapping
    public ResponseEntity<CreateTransactionResponse> createTransaction(@RequestBody CreateTransactionCommand createTransactionCommand) {
        log.info("Creating transaction for user: {} at account: {}",
                createTransactionCommand.getUserId(), createTransactionCommand.getAccountId());
        transactionApplicationService.createTransaction(createTransactionCommand);
    }
}
