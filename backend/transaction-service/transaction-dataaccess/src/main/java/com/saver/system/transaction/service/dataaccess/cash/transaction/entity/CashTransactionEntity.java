package com.saver.system.transaction.service.dataaccess.cash.transaction.entity;

import com.saver.system.transaction.service.domain.valueobject.TransactionAddress;
import com.saver.system.transaction.service.domain.valueobject.TransactionType;
import lombok.*;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.UUID;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "cash_transactions")
@Entity
public class CashTransactionEntity {
    @Id
    private UUID id;
    private UUID userId;
    private UUID accountId;
    private BigDecimal transactionAmount;
    private TransactionType transactionType;
    private String failureMessages;

    @Id
    @ManyToOne()
    @JoinColumn(name = "TRANSACTION_ID")
    private TransactionAddressEntity transactionAddress;
}
