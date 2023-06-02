import { injectable } from "tsyringe";
import CRUD from "../../../common/interface/crud.interface";
import databaseUtils from "../../../common/utils/database.utils";
import bookingSchema from "../../../common/database/schema/booking.schema";
import Booking from "../../../common/database/model/booking.model";

@injectable()
export default class BookingRepository implements CRUD {
  async getOne(data: Booking, popOption_1?: string, popOption_2?: string): Promise<void> {
    return await databaseUtils.readOne(bookingSchema, data, popOption_1, popOption_2);
  }
  async getAll(query?: Record<string, any>): Promise<any> {
    return await databaseUtils.readAll(bookingSchema, query);
  }
  async create(data: Booking): Promise<any> {
    return await databaseUtils.create(bookingSchema, data);
  }
  async update(data: Booking, payload: Booking): Promise<void> {
    return await databaseUtils.update(bookingSchema, data, payload);
  }
  async delete(data: Booking): Promise<void> {
    return await databaseUtils.delete(bookingSchema, data);
  }
}
