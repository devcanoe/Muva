export default class ErrorUtils extends Error {
  status: string;
  statusCode: number;
  isOperational: boolean;
  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith("4") ? "fail" : "error";
    this.isOperational = true;
    Error.captureStackTrace(this, this.constructor);
  }
}

export interface ErrorInterface extends Error {
  status: "error" | "success" | "success";
  statusCode: number;
}
