import { injectable } from "tsyringe";
import Service from "../../../common/interface/service.interface";
import { NextFunction, Request, Response } from "express";
import BookingRepository from "../repository/booking.repository";
import Http from "../../../common/utils/http.utils";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";
import Booking from "../../../common/database/model/booking.model";
import { short_id } from "../../../common/utils/uuid.utils";

@injectable()
export default class CreateBookingService implements Service<Request, Response, NextFunction> {
  constructor(private bookingRepository: BookingRepository, private http: Http) {}
  async execute(
    req: Request<ParamsDictionary, any, Booking, ParsedQs, Record<string, any>>,
    res: Response<any, Record<string, any>>,
    next: NextFunction
  ): Promise<void> {
    try {
      const { trip, user, ref_no } = req.body;

      const newBookingPayload: Booking = {
        trip,
        user,
        ref_no: `bk_${short_id()}`,
      };

      const data = await this.bookingRepository.create(newBookingPayload);

      this.http.Response({
        res,
        status: "success",
        statusCode: 201,
        message: "Booking has Created Successfully",
        data,
      });
    } catch (error) {
      return next(error);
    }
  }
}
