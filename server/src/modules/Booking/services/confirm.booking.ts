import { injectable } from "tsyringe";
import Service from "../../../common/interface/service.interface";
import { NextFunction, Request, Response } from "express";
import BookingRepository from "../repository/booking.repository";
import Http from "../../../common/utils/http.utils";
import { ParsedQs } from "qs";
import { ParamsDictionary } from "express-serve-static-core";
import TransactionRepository from "../../Transaction/repository/transaction.repository";

@injectable()
export default class ConfirmBookingService implements Service<Request, Response, NextFunction> {
  constructor(
    private booking: BookingRepository,
    private http: Http,
    private transaction: TransactionRepository
  ) {}
  async execute(
    req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>,
    res: Response<any, Record<string, any>>,
    next: NextFunction
  ): Promise<void> {
    try {
      const event = req.body;

      if (event.event === "charge.success") {
        await this.transaction.updateOne({ ref_no: event.data.reference }, { status: "success" });
      } else {
        await this.transaction.updateOne({ ref_no: event.data.reference }, { status: "failed" });
      }
    } catch (error) {
      return next(error);
    }
  }
}
