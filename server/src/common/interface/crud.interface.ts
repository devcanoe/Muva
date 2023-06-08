import { Model } from "mongoose";

export default interface CRUD {
  readOne(params: object): Promise<any>;
  readAll(query: object): Promise<any>;
  createOne(payload: object): Promise<any>;
  updateOne(params: object, payload: object): Promise<any>;
  deleteOne(params: string): Promise<any>;
  countAll(query?: object): Promise<any>;
}
