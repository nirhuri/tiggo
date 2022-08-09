package com.saver.system.transaction.service.domain.ports.output.repository;

import com.saver.system.domain.valueobject.UserId;
import com.saver.system.transaction.service.domain.entity.Transaction;
import java.util.Optional;

public interface TransactionRepository {
    Transaction save(Transaction transaction);
    Optional<Transaction> findByUserId(UserId userId);
}