package com.saver.system.transaction.service.dataaccess.cash.transaction.repository;

import com.saver.system.transaction.service.dataaccess.cash.transaction.entity.CashTransactionEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface CashTransactionJpaRepository extends JpaRepository<CashTransactionEntity, UUID> {
    Optional<CashTransactionEntity> findByUserId(UUID userId);

}
