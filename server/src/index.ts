import express, { Application, NextFunction, Request, Response } from "express";
import ServerConfig from "./common/config/server.config";
import morgan from "morgan";

const app: Application = express();

app.use(express.json());
app.use(morgan("dev"));

app.use((req: Request, res: Response, next: NextFunction) => {
  res.setHeader("Acces-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.setHeader("Access-Control-Allow-Method", "GET, POST, PATCH, DELETE, OPTION");

  next();
});

new ServerConfig(app).start();

export default app;
