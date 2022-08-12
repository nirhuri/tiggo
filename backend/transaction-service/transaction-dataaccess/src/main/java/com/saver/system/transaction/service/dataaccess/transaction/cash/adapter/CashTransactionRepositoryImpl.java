package com.saver.system.transaction.service.dataaccess.transaction.cash.adapter;

import com.saver.system.domain.valueobject.UserId;
import com.saver.system.transaction.service.dataaccess.transaction.cash.mapper.CashTransactionAccessMapper;
import com.saver.system.transaction.service.dataaccess.transaction.cash.repository.CashTransactionJpaRepository;
import com.saver.system.transaction.service.domain.ports.output.repository.CashTransactionRepository;
import com.saver.system.transaction.service.domain.entity.CashTransaction;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Component
public class CashTransactionRepositoryImpl implements CashTransactionRepository {

    private final CashTransactionJpaRepository cashTransactionJpaRepository;
    private final CashTransactionAccessMapper cashTransactionAccessMapper;

    public CashTransactionRepositoryImpl(CashTransactionJpaRepository cashTransactionJpaRepository,
                                         CashTransactionAccessMapper cashTransactionAccessMapper) {
        this.cashTransactionJpaRepository = cashTransactionJpaRepository;
        this.cashTransactionAccessMapper = cashTransactionAccessMapper;
    }
    @Override
    public CashTransaction save(CashTransaction transaction) {
        return cashTransactionAccessMapper.cashTransactionEntityToCashTransaction(
                cashTransactionJpaRepository.save(cashTransactionAccessMapper.cashTransactionToCashTransactionEntity(transaction)));
    }

    @Override
    public Optional<CashTransaction> findByUserId(UserId userId) {
        return cashTransactionJpaRepository.findByUserId(userId.getValue())
                .map(cashTransactionAccessMapper::cashTransactionEntityToCashTransaction);
    }
}
