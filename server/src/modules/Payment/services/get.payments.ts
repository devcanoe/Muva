import { injectable } from "tsyringe";
import Service from "../../../common/interface/service.interface";
import { NextFunction, Request, Response } from "express";
import PaymentRepository from "../repository/payment.repository";
import Http from "../../../common/utils/http.utils";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";

@injectable()
export default class GetPaymentsService implements Service<Request, Response, NextFunction> {
  constructor(private paymentRepository: PaymentRepository, private http: Http) {}
  async execute(
    req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>,
    res: Response<any, Record<string, any>>,
    next: NextFunction
  ): Promise<void> {
    try {
      const data = await this.paymentRepository.getAll(req.query);

      this.http.Response({
        res,
        status: "success",
        statusCode: 200,
        message: "Payments Retrieved!",
        data,
      });
    } catch (error) {
      return next(error);
    }
  }
}
