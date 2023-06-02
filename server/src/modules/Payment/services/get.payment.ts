import { injectable } from "tsyringe";
import Service from "../../../common/interface/service.interface";
import { NextFunction, Request, Response } from "express";
import PaymentRepository from "../repository/payment.repository";
import Http from "../../../common/utils/http.utils";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";

@injectable()
export default class GetPaymentService implements Service<Request, Response, NextFunction> {
  constructor(private paymentRepository: PaymentRepository, private http: Http) {}
  async execute(
    req: Request<{ id: string }, any, any, ParsedQs, Record<string, any>>,
    res: Response<any, Record<string, any>>,
    next: NextFunction
  ): Promise<void> {
    try {
      const { id } = req.params;
      const data = await this.paymentRepository.getOne({ _id: id });

      this.http.Response({
        res,
        status: "success",
        statusCode: 200,
        message: "Payment Retrieved!",
        data,
      });
    } catch (error) {
      return next(error);
    }
  }
}
