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
  async readOne(model: Model<any>, data: Record<string, string | any>) {
    try {
      return model.findOne(data);
    } catch (error: any) {
      error.message;
    }
  }
  async readAll(model: Model<any>) {
    try {
      return model.find();
    } catch (error: any) {
      error.message;
    }
  }
  async update(model: Model<any>, data: Record<string, string | any>, payload: Record<string, string | any>) {
    try {
      return model.findByIdAndUpdate(data, payload, { new: true });
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

  //FEATURES
  filter() {}
  sort() {}
  page() {}
}

export default new DatabaseUtil(mongoose);
