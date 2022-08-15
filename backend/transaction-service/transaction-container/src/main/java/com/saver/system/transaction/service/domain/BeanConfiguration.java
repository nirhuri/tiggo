package com.saver.system.transaction.service.domain;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class BeanConfiguration {

    @Bean
    public TransactionDomainService transactionDomainService() {
        return new TransactionDomainServiceImpl();
    }
}
