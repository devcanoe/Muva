import { Application, NextFunction, Request, Response } from "express";
import { ErrorInterface } from "../utils/error.utils";
import Http from "../utils/http.utils";
import userRoute from "../../modules/User/routes/user.routes";

export default class Routes {
  http: any;
  app: Application;
  constructor(app: Application) {
    this.app = app;
    this.http = new Http();
  }
  router() {
    this.app.get("/", (req: Request, res: Response) => {
      res.status(200).json({
        message: "Route Works!",
      });
    });

    //MAIN ROUTES
    this.app.use("/api/v1/user", userRoute);
    //ERROR HANDLING
    this.app.all("*", (req: Request, res: Response) => {
      this.http.Response({
        res,
        statusCode: 404,
        status: "error",
        message: "404, page not found",
      });
    });

    this.app.use((err: ErrorInterface, req: Request, res: Response, next: NextFunction) => {
      err.status = err.status || "fail";
      err.statusCode = err.statusCode || 500;

      this.http.Response({ res, statusCode: err.statusCode, status: err.status, message: err.message });
    });
  }
}
