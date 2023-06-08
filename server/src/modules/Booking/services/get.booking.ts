import { injectable } from "tsyringe";
import Service from "../../../common/interface/service.interface";
import { NextFunction, Request, Response } from "express";
import BookingRepository from "../repository/booking.repository";
import Http from "../../../common/utils/http.utils";
import { ParsedQs } from "qs";
import { ParamsDictionary } from "express-serve-static-core";

@injectable()
export default class GetBookingService implements Service<Request, Response, NextFunction> {
  constructor(private booking: BookingRepository, private http: Http) {}
  async execute(
    req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>,
    res: Response<any, Record<string, any>>,
    next: NextFunction
  ): Promise<void> {
    try {
      const { id } = req.params;

      const data = await this.booking.readOne({ _id: id });

      this.http.Response({
        res,
        status: "success",
        statusCode: 200,
        message: "Booking Retrieved!",
        data,
      });
    } catch (error) {
      return next(error);
    }
  }
}
