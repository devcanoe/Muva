import { Application } from "express";
import indexConfig from "./index.config";

export default class ServerConfig {
  private app: Application;
  constructor(app: Application) {
    this.app = app;
  }
  start() {
    this.app.listen(indexConfig.port, () => {
      console.log(`Server is running at http://localhost:${indexConfig.port}`);
    });
  }
  stop() {}
}
