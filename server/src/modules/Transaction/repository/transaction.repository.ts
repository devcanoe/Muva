import { injectable } from "tsyringe";
import CRUD from "../../../common/interface/crud.interface";
import Transaction from "../../../common/database/model/transaction.model";
import transactionSchema from "../../../common/database/schema/transaction.schema";
import DatabaseQueryHelper from "../../../common/helpers/database.helper";

@injectable()
export default class TransactionRepository implements CRUD {
  constructor(private query: DatabaseQueryHelper) {}
  async readOne(params: Transaction): Promise<any> {
    try {
      return await this.query.readOne(transactionSchema, params);
    } catch (error) {
      return error;
    }
  }
  async readAll(query: object): Promise<any> {
    try {
      return await this.query.readAll(transactionSchema, query);
    } catch (error) {
      return error;
    }
  }
  async createOne(payload: Transaction): Promise<any> {
    try {
      return await this.query.createOne(transactionSchema, payload);
    } catch (error) {
      return error;
    }
  }
  async updateOne(params: Transaction, payload: Transaction): Promise<any> {
    try {
      return await this.query.updateOne(transactionSchema, params, payload);
    } catch (error) {
      return error;
    }
  }
  async deleteOne(params: string): Promise<any> {
    try {
      return await this.query.deleteOne(transactionSchema, params);
    } catch (error) {
      return error;
    }
  }
  async countAll(query?: object): Promise<any> {
    try {
      return await this.query.countAll(transactionSchema, query);
    } catch (error) {
      return error;
    }
  }
}
