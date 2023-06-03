import { Model } from "mongoose";

export default interface CRUD {
  getOne(data: Record<string, any>): Promise<any>;
  getAll(query: Record<string, string>): Promise<any>;
  create(data: Record<string, any>): Promise<any>;
  update(data: Record<string, any>, payload: Record<string, any>): Promise<any>;
  delete(data: Record<string, any>): Promise<any>;
}
