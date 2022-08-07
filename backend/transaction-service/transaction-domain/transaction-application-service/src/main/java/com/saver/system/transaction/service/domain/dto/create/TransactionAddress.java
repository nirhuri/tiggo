package com.saver.system.transaction.service.domain.dto.create;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

import javax.validation.constraints.Max;
import javax.validation.constraints.NotNull;
import java.util.UUID;

@Getter
@Builder
@AllArgsConstructor
public class TransactionAddress {
    @NotNull
    private final UUID id;
    @NotNull
    @Max(value = 50)
    private final String businessName;
}
