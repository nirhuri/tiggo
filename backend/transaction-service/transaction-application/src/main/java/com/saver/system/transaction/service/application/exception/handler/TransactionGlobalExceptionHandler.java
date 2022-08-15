package com.saver.system.transaction.service.application.exception.handler;

import com.saver.system.transaction.service.domain.exception.TransactionDomainException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

@Slf4j
@ControllerAdvice
public class TransactionGlobalExceptionHandler {

    @ResponseBody
    @ExceptionHandler(value = {TransactionDomainException.class})
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ErrorDTO handleException(TransactionDomainException transactionDomainException) {
        log.error(transactionDomainException.getMessage(), transactionDomainException);
        return ErrorDTO.builder()
                .code(HttpStatus.BAD_REQUEST.getReasonPhrase())
                .message(transactionDomainException.getMessage())
                .build();
    }

//    @ResponseBody
//    @ExceptionHandler(value = {TransactionNotFoundException.class})
//    @ResponseStatus(HttpStatus.NOT_FOUND)
//    public ErrorDTO handleException(TransactionNotFoundException transactionNotFoundException) {
//        log.error(transactionNotFoundException.getMessage(), transactionNotFoundException);
//        return ErrorDTO.builder()
//                .code(HttpStatus.NOT_FOUND.getReasonPhrase())
//                .message(transactionNotFoundException.getMessage())
//                .build();
//    }
}
