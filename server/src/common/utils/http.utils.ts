import { Response } from "express";
import { injectable } from "tsyringe";

@injectable()
export default class Http {
  constructor() {}
  Response({ res, status, statusCode, message, data }: ResponseModel) {
    return res.status(statusCode).json({
      status: status,
      message,
      data,
    });
  }
}

interface ResponseModel {
  res: Response;
  status: "error" | "success" | "fail";
  statusCode: number;
  message: string;
  data?: any;
}

enum Status {
  error,
  success,
  fail,
}
