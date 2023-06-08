import { injectable } from "tsyringe";
import CRUD from "../../../common/interface/crud.interface";
import User from "../../../common/database/model/user.model";
import userSchema from "../../../common/database/schema/user.schema";
import DatabaseQueryHelper from "../../../common/helpers/database.helper";

@injectable()
export default class UserRepository implements CRUD {
  constructor(private query: DatabaseQueryHelper) {}
  async readOne(params: User): Promise<any> {
    try {
      return await this.query.readOne(userSchema, params);
    } catch (error) {
      return error;
    }
  }
  async readAll(query: object): Promise<any> {
    try {
      return await this.query.readAll(userSchema, query);
    } catch (error) {
      return error;
    }
  }
  async createOne(payload: User): Promise<any> {
    try {
      return await this.query.createOne(userSchema, payload);
    } catch (error) {
      return error;
    }
  }
  async updateOne(params: User, payload: User): Promise<any> {
    try {
      return await this.query.updateOne(userSchema, params, payload);
    } catch (error) {
      return error;
    }
  }
  async deleteOne(params: string): Promise<any> {
    try {
      return await this.query.deleteOne(userSchema, params);
    } catch (error) {
      return error;
    }
  }
  async countAll(query?: object | undefined): Promise<any> {
    try {
      return await this.query.countAll(userSchema, query);
    } catch (error) {
      return error;
    }
  }
}
