import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, Index } from 'typeorm';

enum TransactionType {
    WITHDRAW,
    DEPOSITE
}

@Entity()
@Index(["transaction_type", "user_id"])
export class CashTransactionEntity {
    @PrimaryGeneratedColumn('uuid')
    _id: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @Column('int', { nullable: false })
    transaction_type: TransactionType

    @Column({ nullable: false, type: 'real' })
    amount: number;

    @Column({ nullable: false })
    user_id: string;

    @Column({ nullable: false })
    title: string;
}