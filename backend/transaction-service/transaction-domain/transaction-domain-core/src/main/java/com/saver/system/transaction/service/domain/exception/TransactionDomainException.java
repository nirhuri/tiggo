package com.saver.system.transaction.service.domain.exception;

import com.saver.system.domain.exception.DomainException;

public class TransactionDomainException extends DomainException {

    public TransactionDomainException(String message) {
        super(message);
    }

    public TransactionDomainException(String message, Throwable cause) {
        super(message, cause);
    }

}
