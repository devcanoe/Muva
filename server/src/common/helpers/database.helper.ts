import { Model } from "mongoose";
import { injectable } from "tsyringe";

@injectable()
export default class DatabaseQueryHelper {
  //CRUD
  async createOne(model: Model<any>, data: object) {
    try {
      return model.create(data);
    } catch (error: any) {
      error.message;
    }
  }
  async readOne(model: Model<any>, data: object) {
    try {
      return model.findOne(data);
    } catch (error: any) {
      error.message;
    }
  }
  async readAll(model: Model<any>, query: Record<string, any>) {
    try {
      const queryObj = { ...query };
      const filterObj = { ...query };
      const deletedStr = ["sort", "limit", "page"];
      deletedStr.map((el) => delete filterObj[el]);

      //FILTER
      let queryStr = JSON.stringify(filterObj);
      queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);

      //SORT
      let sort;
      if (queryObj.sort) {
        sort = queryObj.sort.split(",").join(" ");
      } else {
        sort = "created_at";
      }

      //PAGINATION
      const skip = queryObj.skip * 1 || 1;
      const limit = queryObj.limit * 1 || 10;
      const page = (skip - 1) * limit;

      return model.find(JSON.parse(queryStr)).sort(sort).skip(page).limit(limit);
    } catch (error: any) {
      error.message;
    }
  }
  async updateOne(model: Model<any>, params: object, payload: object) {
    try {
      return model.findOneAndUpdate(params, payload, { new: true });
    } catch (error: any) {
      error.message;
    }
  }
  async deleteOne(model: Model<any>, params: string) {
    try {
      return model.findByIdAndDelete(params);
    } catch (error: any) {
      error.message;
    }
  }
  async countAll(model: Model<any>, query?: object) {
    try {
      return await model.countDocuments(query);
    } catch (error: any) {
      return error.message;
    }
  }
}
