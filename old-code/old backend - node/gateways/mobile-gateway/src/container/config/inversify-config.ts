import { Container } from "inversify";
import { TYPES } from "../types/inversify-types";
import { TransactionController } from "../../rest/transaction-controller";


const container = new Container();

container.bind(TYPES.TransactionController).to(TransactionController);

export { container };
