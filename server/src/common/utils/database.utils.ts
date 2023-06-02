import mongoose, { Model, Mongoose } from "mongoose";
import indexConfig from "../config/index.config";

class DatabaseUtil {
  driver: Mongoose;
  constructor(driver: Mongoose) {
    this.driver = driver;
  }
  connect() {
    this.driver
      .connect(indexConfig.databae.url)
      .then(() => {
        console.log(`Database Connection Successfull`);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  //CRUD
  async create(model: Model<any>, data: Record<string, string | any>) {
    try {
      return model.create(data);
    } catch (error: any) {
      error.message;
    }
  }
  async readOne(model: Model<any>, data: Record<string, string | any>, popOption_1?: string, popOption_2?: string) {
    try {
      return model
        .findOne(data)
        .populate(popOption_1 || "")
        .populate(popOption_2 || "");
    } catch (error: any) {
      error.message;
    }
  }
  async readAll(model: Model<any>, query?: Record<string, any>) {
    try {
      const queryObj = { ...query };

      const deletedStr = ["sort", "limit", "page"];

      deletedStr.map((el) => delete queryObj[el]);

      let queryStr = JSON.stringify(queryObj);

      queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);

      return model.find(JSON.parse(queryStr));
    } catch (error: any) {
      error.message;
    }
  }
  async update(model: Model<any>, data: Record<string, string | any>, payload: Record<string, string | any>) {
    try {
      return model.findOneAndUpdate(data, payload, { new: true });
    } catch (error: any) {
      error.message;
    }
  }
  async delete(model: Model<any>, data: Record<string, string | any>) {
    try {
      return model.findByIdAndDelete(data);
    } catch (error: any) {
      error.message;
    }
  }
}

export default new DatabaseUtil(mongoose);
