import { injectable } from "tsyringe";
import CRUD from "../../../common/interface/crud.interface";
import databaseUtils from "../../../common/utils/database.utils";
import tripSchema from "../../../common/database/schema/trip.schema";
import Trip from "../../../common/database/model/trip.model";

@injectable()
export default class TripRepository implements CRUD {
  async getOne(data: Trip): Promise<any> {
    return await databaseUtils.readOne(tripSchema, data);
  }
  async getAll(query: Record<string, any>): Promise<any> {
    return await databaseUtils.readAll(tripSchema, query);
  }
  async create(data: Trip): Promise<void> {
    return await databaseUtils.create(tripSchema, data);
  }
  async update(data: Trip, payload: Trip): Promise<void> {
    return databaseUtils.update(tripSchema, data, payload);
  }
  async delete(data: Trip): Promise<void> {
    return await databaseUtils.delete(tripSchema, data);
  }
}
