import { Application } from "express";
import config from "config";
import { Log } from "../utils/logger.utils";

export default class ServerConfig {
  private app: Application;
  constructor(app: Application) {
    this.app = app;
  }
  start() {
    this.app.listen(config.get("port"), () => {
      if (config.get("env") === "development") {
        Log.info(`Server is running at http://localhost:${config.get("port")}`);
      } else {
        Log.info(`Server Up!`);
      }
    });
  }
  stop() {}
}
