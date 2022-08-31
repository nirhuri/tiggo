import { RouteNotFoundMiddleware } from "@machsan-tiggo/common";
import express, { NextFunction, Request, Response, Application } from "express";
import { useExpressServer } from "routing-controllers";
import { TransactionController } from "../application/rest/transaction-controller";

export class App {
  public app: Application;
  public port: number;

  constructor(port: number) {
    this.port = port;
    this.app = express();
    this.app.use(this.headers);
    this.assets();
    this.httpServerConfig();
  }

  headers(req: Request, res: Response, next: NextFunction) {
    // Website you wish to allow to connect
    res.setHeader("Access-Control-Allow-Origin", "*");

    // Request methods you wish to allow
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, OPTIONS, PUT,    PATCH, DELETE"
    );

    // Request headers you wish to allow
    res.setHeader(
      "Access-Control-Allow-Headers",
      "X-Requested-With,content-type"
    );

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader("Access-Control-Allow-Credentials", "truel");

    // Pass to next layer of middleware
    next();
  }

  private httpServerConfig() {
    useExpressServer(this.app, {
      middlewares: [
        express.json(),
        express.urlencoded({ extended: true }),
        RouteNotFoundMiddleware,
      ],
      controllers: [TransactionController],
    });
  }

  private assets() {
    this.app.use(express.static("public"));
    this.app.use(express.static("views"));
  }

  public listen() {
    this.app.listen(this.port, "0.0.0.0", () => {
      console.log(`App listening on PORT ${this.port}`);
    });
  }
}
