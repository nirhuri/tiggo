import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn, Index } from 'typeorm';

enum TransactionType {
    WITHDRAW,
    DEPOSITE
}

@Entity()
@Index(["transaction_type"])
export class CashTransactionEntity {
    @PrimaryGeneratedColumn('uuid')
    _id: string;

    @Column('int', { nullable: false })
    transaction_type: TransactionType

    @Column({ nullable: false })
    amount: number;
}