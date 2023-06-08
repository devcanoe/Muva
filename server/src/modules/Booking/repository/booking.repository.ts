import { injectable } from "tsyringe";
import CRUD from "../../../common/interface/crud.interface";
import bookingSchema from "../../../common/database/schema/booking.schema";
import Booking from "../../../common/database/model/booking.model";
import DatabaseQueryHelper from "../../../common/helpers/database.helper";

@injectable()
export default class BookingRepository implements CRUD {
  constructor(private query: DatabaseQueryHelper) {}
  async readOne(params: object): Promise<any> {
    try {
      return await this.query.readOne(bookingSchema, params);
    } catch (error) {
      return error;
    }
  }
  async readAll(query: object): Promise<any> {
    try {
      return await this.query.readAll(bookingSchema, query);
    } catch (error) {
      return error;
    }
  }
  async createOne(payload: Booking): Promise<any> {
    try {
      return await this.query.createOne(bookingSchema, payload);
    } catch (error) {
      return error;
    }
  }
  async updateOne(params: Booking, payload: Booking): Promise<any> {
    try {
      return await this.query.updateOne(bookingSchema, params, payload);
    } catch (error) {
      return error;
    }
  }
  async deleteOne(params: string): Promise<any> {
    try {
      return await this.query.deleteOne(bookingSchema, params);
    } catch (error) {
      return error;
    }
  }
  async countAll(query?: object | undefined): Promise<any> {
    try {
      return await this.query.countAll(bookingSchema, query);
    } catch (error) {
      return error;
    }
  }
}
