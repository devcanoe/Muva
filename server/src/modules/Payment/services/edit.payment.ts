import { injectable } from "tsyringe";
import Service from "../../../common/interface/service.interface";
import { NextFunction, Request, Response } from "express";
import PaymentRepository from "../repository/payment.repository";
import Http from "../../../common/utils/http.utils";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";
import Payment from "../../../common/database/model/payment.model";

@injectable()
export default class EditPaymentService implements Service<Request, Response, NextFunction> {
  constructor(private paymentRepository: PaymentRepository, private http: Http) {}
  async execute(
    req: Request<{ id: string }, any, Payment, ParsedQs, Record<string, any>>,
    res: Response<any, Record<string, any>>,
    next: NextFunction
  ): Promise<void> {
    try {
      const { id } = req.params;
      const { status } = req.body;

      const newPaymentPayload: Payment = {
        status,
        updated_at: new Date(),
      };

      const data = await this.paymentRepository.update({ _id: id }, newPaymentPayload);

      this.http.Response({
        res,
        status: "success",
        statusCode: 201,
        message: "Payment Updated Successfully",
        data,
      });
    } catch (error) {
      return next(error);
    }
  }
}
