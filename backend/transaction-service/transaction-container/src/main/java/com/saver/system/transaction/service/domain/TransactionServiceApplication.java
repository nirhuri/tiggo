package com.saver.system.transaction.service.domain;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@EnableJpaRepositories(basePackages = "com.saver.system.transaction.service.dataaccess")
@EntityScan(basePackages = "com.saver.system.transaction.service.dataaccess")
@SpringBootApplication(scanBasePackages = "com.saver.system")
public class TransactionServiceApplication {
    public static void main(String args[]) {
        SpringApplication.run(TransactionServiceApplication.class, args);
    }
}
