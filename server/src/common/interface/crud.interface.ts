import { Model } from "mongoose";

export default interface CRUD {
  getOne(data: Record<string, any>): Promise<void>;
  getAll(query: Record<string, string>): Promise<any>;
  create(data: Record<string, any>): Promise<void>;
  update(data: Record<string, any>, payload: Record<string, any>): Promise<void>;
  delete(data: Record<string, any>): Promise<void>;
}
