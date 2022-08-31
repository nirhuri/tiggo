import { Request, Response, NextFunction } from "express";
import { ExpressMiddlewareInterface } from "routing-controllers";

export class CreateCashTransactionMiddleware implements ExpressMiddlewareInterface {
    use(request: any, response: any, next: Function) {
        console.log(request.body.amount)
        if (!request.body?.amount || !request.body?.title) {
            return response.status(400).send("Missing data."); // TODO: change to throw an exception that return 404
        }

        next("OK");
    }
}