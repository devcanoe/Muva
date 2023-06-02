import { injectable } from "tsyringe";
import Service from "../../../common/interface/service.interface";
import { NextFunction, Request, Response } from "express";
import PaymentRepository from "../repository/payment.repository";
import Http from "../../../common/utils/http.utils";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";
import Payment from "../../../common/database/model/payment.model";
import { short_id } from "../../../common/utils/uuid.utils";

@injectable()
export default class CreatePaymentService implements Service<Request, Response, NextFunction> {
  constructor(private paymentRepository: PaymentRepository, private http: Http) {}
  async execute(
    req: Request<ParamsDictionary, any, Payment, ParsedQs, Record<string, any>>,
    res: Response<any, Record<string, any>>,
    next: NextFunction
  ): Promise<void> {
    try {
      const { booking, payment_method } = req.body;

      const newPaymentPayload: Payment = {
        booking,
        status: "pending",
        payment_method,
        ref_no: `${payment_method}_${short_id()}`,
      };

        const data = await this.paymentRepository.create(newPaymentPayload);
        
        this.http.Response({
            res,
            status: "success",
            statusCode: 201,
            message: "Payment Created Successfully",
            data,
      });
    } catch (error) {
      return next(error);
    }
  }
}
