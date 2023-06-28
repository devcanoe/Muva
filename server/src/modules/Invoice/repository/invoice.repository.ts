import { injectable } from "tsyringe";
import CRUD from "../../../common/interface/crud.interface";
import Invoice from "../../../common/database/model/invoice.model";
import DatabaseQueryHelper from "../../../common/helpers/database.helper";
import invoiceSchema from "../../../common/database/schema/invoice.schema";

@injectable()
export default class InvoiceRepository implements CRUD {
  constructor(private query: DatabaseQueryHelper) {}
  async readOne(params: Invoice): Promise<any> {
    try {
      return await this.query.readOne(invoiceSchema, params);
    } catch (error) {
      return error;
    }
  }
  async readAll(query: object): Promise<any> {
    try {
      return await this.query.readAll(invoiceSchema, query);
    } catch (error) {
      return error;
    }
  }
  async createOne(payload: Invoice): Promise<any> {
    try {
      return await this.query.createOne(invoiceSchema, payload);
    } catch (error) {
      return error;
    }
  }
  async updateOne(params: Invoice, payload: Invoice): Promise<any> {
    try {
      return await this.query.updateOne(invoiceSchema, params, payload);
    } catch (error) {
      return error;
    }
  }
  async deleteOne(params: string): Promise<any> {
    try {
      return await this.query.deleteOne(invoiceSchema, params);
    } catch (error) {
      return error;
    }
  }
  async countAll(query?: object | undefined): Promise<any> {
    try {
      return await this.query.countAll(invoiceSchema, query);
    } catch (error) {
      return error;
    }
  }
}
