import { injectable } from "tsyringe";
import CRUD from "../../../common/interface/crud.interface";
import databaseUtils from "../../../common/utils/database.utils";
import User from "../../../common/database/model/user.model";
import userSchema from "../../../common/database/schema/user.schema";

@injectable()
export default class UserRepository implements CRUD {
  constructor() {}
  async getOne(data: User): Promise<any> {
    return await databaseUtils.readOne(userSchema, data);
  }
  async getAll(query: Record<string, any>): Promise<any> {
    return await databaseUtils.readAll(userSchema, query);
  }
  async create(data: User): Promise<void> {
    return await databaseUtils.create(userSchema, data);
  }
  async update(data: User, payload: User): Promise<void> {
    return await databaseUtils.update(userSchema, data, payload);
  }
  async delete(data: User): Promise<void> {
    return await databaseUtils.delete(userSchema, data);
  }
}
