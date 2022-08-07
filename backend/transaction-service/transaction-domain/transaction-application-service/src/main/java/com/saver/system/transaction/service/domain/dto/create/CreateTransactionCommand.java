package com.saver.system.transaction.service.domain.dto.create;

import com.saver.system.transaction.service.domain.valueobject.TransactionAddress;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

import javax.validation.constraints.NotNull;
import java.math.BigDecimal;
import java.util.UUID;

@Getter
@Builder
@AllArgsConstructor
public class CreateTransactionCommand {
    @NotNull
    private final UUID userId;
    @NotNull
    private final UUID accountId;
    @NotNull
    private final BigDecimal transactionAmount;
    @NotNull
    private final TransactionAddress address;
}
