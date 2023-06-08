import { injectable } from "tsyringe";
import CRUD from "../../../common/interface/crud.interface";
import tripSchema from "../../../common/database/schema/trip.schema";
import Trip from "../../../common/database/model/trip.model";
import DatabaseQueryHelper from "../../../common/helpers/database.helper";

@injectable()
export default class TripRepository implements CRUD {
  constructor(private query: DatabaseQueryHelper) {}
  async readOne(params: Trip): Promise<any> {
    try {
      return await this.query.readOne(tripSchema, params);
    } catch (error) {
      return error;
    }
  }
  async readAll(query: object): Promise<any> {
    try {
      return await this.query.readAll(tripSchema, query);
    } catch (error) {
      return error;
    }
  }
  async createOne(payload: Trip): Promise<any> {
    try {
      return await this.query.createOne(tripSchema, payload);
    } catch (error) {
      return error;
    }
  }
  async updateOne(params: Trip, payload: Trip): Promise<any> {
    try {
      return await this.query.updateOne(tripSchema, params, payload);
    } catch (error) {
      return error;
    }
  }
  async deleteOne(params: string): Promise<any> {
    try {
      return await this.query.deleteOne(tripSchema, params);
    } catch (error) {
      return error;
    }
  }
  async countAll(query?: object | undefined): Promise<any> {
    try {
      return await this.query.countAll(tripSchema, query);
    } catch (error) {
      return error;
    }
  }
}
