import { injectable } from "tsyringe";
import Service from "../../../common/interface/service.interface";
import { NextFunction, Request, Response } from "express";
import BookingRepository from "../repository/booking.repository";
import Http from "../../../common/utils/http.utils";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";
import Booking from "../../../common/database/model/booking.model";

@injectable()
export default class EditBookingService implements Service<Request, Response, NextFunction> {
  constructor(private bookingRepository: BookingRepository, private http: Http) {}
  async execute(
    req: Request<{ id: string }, any, Booking, ParsedQs, Record<string, any>>,
    res: Response<any, Record<string, any>>,
    next: NextFunction
  ): Promise<void> {
    try {
      const { id } = req.params;
      const { trip, user } = req.body;

      const newBookingPayload: Booking = {
        trip,
        user,
      };

      const data = await this.bookingRepository.update({ _id: id }, newBookingPayload);

      this.http.Response({
        res,
        status: "success",
        statusCode: 201,
        message: "Booking has Been Updated!",
        data,
      });
    } catch (error) {
      return next(error);
    }
  }
}
