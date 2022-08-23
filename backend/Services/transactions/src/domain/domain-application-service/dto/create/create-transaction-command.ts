import { IsNotEmpty } from 'class-validator';

export class CreateTransactionCommand {
    @IsNotEmpty()
    amount: number;
    
    @IsNotEmpty()
    title: string;


}