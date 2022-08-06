package com.saver.system.transaction.service.dataaccess.cash.transaction.entity;

import com.saver.system.transaction.service.domain.valueobject.TransactionStrategy.CashTransaction;
import lombok.*;

import javax.persistence.*;
import java.util.Objects;
import java.util.UUID;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "transaction_address")
@Entity
public class TransactionAddressEntity {
    @Id
    private UUID id;

    @OneToMany(mappedBy = "transaction")
    private CashTransaction transaction;

    private String businessName;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        TransactionAddressEntity that = (TransactionAddressEntity) o;
        return id.equals(that.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}
