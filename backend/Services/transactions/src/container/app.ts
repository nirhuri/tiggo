import express, { NextFunction, Request, Response, Application } from "express";
import { errorHandler, NotFoundError } from "@hurinir/common";

export class App {
  public app: Application;
  public port: number;

  constructor(appInit: { port: number; middleWares: any; }) {
    this.app = express();
    this.app.use(this.headers);
    this.port = appInit.port;
    this.middlewares(appInit.middleWares);
    this.assets();
    this.database();
    this.app.all("*", async () => {
      throw new NotFoundError();
    });
    this.app.use(errorHandler);
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

  private middlewares(middleWares: {
    forEach: (arg0: (middleWare: any) => void) => void;
  }) {
    middleWares.forEach((middleWare) => {
      this.app.use(middleWare);
    });
  }

  private routes(controllers: {
    forEach: (arg0: (controller: any) => void) => void;
  }) {
    controllers.forEach((controller) => {
      this.app.use("/", controller.router);
    });
  }

  private assets() {
    this.app.use(express.static("public"));
    this.app.use(express.static("views"));
  }

  private async database() {
    // try {
    //   await mongoose.connect(String(process.env.MONGO_URI));
    //   console.log("Connected to MongoDB");
    // } catch (err: any) {
    //   throw new Error(err);
    // }
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`App listening on PORT ${this.port}`);
    });
  }
}
