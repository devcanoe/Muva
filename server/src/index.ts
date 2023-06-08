import "reflect-metadata";
import express, { Application, NextFunction, Request, Response } from "express";
import ServerConfig from "./common/config/server.config";
import morgan from "morgan";
import Routes from "./common/routes/index.routes";
import databaseConfig from "./common/config/database.config";

const app: Application = express();

app.use(express.json());
app.use(morgan("dev"));

app.use((req: Request, res: Response, next: NextFunction) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.setHeader("Access-Control-Allow-Method", "GET, POST, PATCH, DELETE, OPTION");

  next();
});

new Routes(app).router();
new ServerConfig(app).start();
databaseConfig.connect();

export default app;
