package com.saver.system.transaction.service.dataaccess.transaction.cash.entity;

import com.saver.system.transaction.service.domain.valueobject.TransactionType;
import lombok.*;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.Objects;
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
    @Enumerated(EnumType.STRING)
    private TransactionType transactionType;
    private String failureMessages;

    @Id
    // @ManyToOne()
    // @JoinColumn(name = "TRANSACTION_ID")
    // private TransactionAddressEntity transactionAddress;

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;
        CashTransactionEntity that = (CashTransactionEntity) o;
        return id.equals(that.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}
