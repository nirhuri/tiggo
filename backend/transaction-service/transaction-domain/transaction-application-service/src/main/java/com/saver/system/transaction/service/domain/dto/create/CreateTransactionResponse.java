package com.saver.system.transaction.service.domain.dto.create;

import com.saver.system.domain.valueobject.Money;
import com.saver.system.transaction.service.domain.valueobject.TransactionAddress;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

import javax.validation.constraints.NotNull;
import java.util.UUID;

@Getter
@Builder
@AllArgsConstructor
public class CreateTransactionResponse {
    @NotNull
    private final UUID userId;
    @NotNull
    private final UUID accountId;
    @NotNull
    private final Money transactionAmount;
    @NotNull
    private final TransactionAddress transactionAddress;
    @NotNull
    private final String message;
    @NotNull
    private final String transactionDataType;


}
