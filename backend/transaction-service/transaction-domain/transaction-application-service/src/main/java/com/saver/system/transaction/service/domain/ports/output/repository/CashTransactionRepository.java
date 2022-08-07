package com.saver.system.transaction.service.domain.ports.output.repository;

import com.saver.system.domain.valueobject.UserId;
import com.saver.system.transaction.service.domain.valueobject.TransactionStrategy.CashTransaction;

import java.util.Optional;

public interface CashTransactionRepository {
    CashTransaction save(CashTransaction transaction);

    Optional<CashTransaction> findByUserId(UserId userId);
}
