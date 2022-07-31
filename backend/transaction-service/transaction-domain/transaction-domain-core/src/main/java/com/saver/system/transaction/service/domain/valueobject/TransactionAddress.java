package com.saver.system.transaction.service.domain.valueobject;

import java.util.Objects;
import java.util.UUID;

public class TransactionAddress {
    private final UUID id;
    private final String businessName;

    public TransactionAddress(UUID id, String businessName) {
        this.id = id;
        this.businessName = businessName;
    }

    public String getBusinessName() {
        return businessName;
    }

    public UUID getId() {
        return id;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        TransactionAddress that = (TransactionAddress) o;
        return Objects.equals(id, that.id) && Objects.equals(businessName, that.businessName);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, businessName);
    }
}
