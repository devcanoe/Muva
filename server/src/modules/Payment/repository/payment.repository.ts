import { injectable } from "tsyringe";
import CRUD from "../../../common/interface/crud.interface";
import Payment from "../../../common/database/model/transaction.model";
import databaseUtils from "../../../common/utils/database.utils";
import paymentSchema from "../../../common/database/schema/transaction.schema";

@injectable()
export default class PaymentRepository implements CRUD {
  constructor() {}
  async getOne(data: Payment): Promise<any> {
    return await databaseUtils.readOne(paymentSchema, data);
  }
  async getAll(query: Record<string, any>): Promise<any> {
    return await databaseUtils.readAll(paymentSchema, query);
  }
  async create(data: Payment): Promise<any> {
    return await databaseUtils.create(paymentSchema, data);
  }
  async update(data: Payment, payload: Payment): Promise<any> {
    return await databaseUtils.update(paymentSchema, data, payload);
  }
  async delete(data: Payment): Promise<any> {
    return await databaseUtils.delete(paymentSchema, data);
  }
}
