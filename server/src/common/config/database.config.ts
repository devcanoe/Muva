import mongoose, { Mongoose } from "mongoose";
import config from "config";
import { Log } from "../utils/logger.utils";

class Database {
  driver: Mongoose;
  constructor(driver: Mongoose) {
    this.driver = driver;
  }
  connect() {
    this.driver
      .connect(config.get("mongo_uri"))
      .then(() => {
        Log.info(`Database Connection Successfull`);
      })
      .catch((error) => {
        Log.warn(error);
      });
  }
}

export default new Database(mongoose);
