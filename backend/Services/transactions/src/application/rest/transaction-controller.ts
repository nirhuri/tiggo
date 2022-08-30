import { inject, injectable } from "inversify";
import { Body, Controller, Post } from "routing-controllers";
import { TYPES } from "../../container/types/inversify-types";
import { CreateTransactionCommand } from "../../domain/domain-application-service/dto/create/create-transaction-command";
import { ITransactionApplicationService } from "../../domain/domain-application-service/ports/input/itransaction-application-service";


@injectable()
@Controller('/transaction')
export class TransactionController {

    constructor(
        @inject(TYPES.TransactionApplicationService) private transactionApplicationService: ITransactionApplicationService
    ) { }

    @Post('/cash')
    createCashTransaction(@Body() createTransactionCommand: CreateTransactionCommand) {
        return "Created";
    }
}