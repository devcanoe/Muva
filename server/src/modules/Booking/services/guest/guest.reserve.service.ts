import { injectable } from "tsyringe";
import Service from "../../../../common/interface/service.interface";
import { NextFunction, Request, Response } from "express";
import UserRepository from "../../../User/repository/user.repository";
import BookingRepository from "../../repository/booking.repository";
import TransactionRepository from "../../../Transaction/repository/transaction.repository";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";
import User from "../../../../common/database/model/user.model";
import Booking from "../../../../common/database/model/booking.model";
import { generate_id } from "../../../../common/utils/generateID.utils";
import Http from "../../../../common/utils/http.utils";
import PaymentHelper from "../../../../common/helpers/payment.helper";

@injectable()
export default class GuestReserveSeatService implements Service<Request, Response, NextFunction> {
  constructor(
    private user: UserRepository,
    private booking: BookingRepository,
    private transaction: TransactionRepository,
    private payment: PaymentHelper,
    private http: Http
  ) {}
  async execute(
    req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>,
    res: Response<any, Record<string, any>>,
    next: NextFunction
  ): Promise<any> {
    try {
      const { trip, first_name, last_name, email, phone, gender, total_cost } = req.body;

      //CREATE USER
      const newUserPayload: User = {
        first_name,
        last_name,
        email,
        phone,
        gender,
        role: "GUEST",
      };
      const user: User = await this.user.createOne(newUserPayload);

      //CREATE BOOKING
      const bookingReference = generate_id("bk");
      const newBookingPayload: Booking = {
        trip,
        total_cost,
        user: user._id,
        ref_no: bookingReference,
      };
      const booking: Booking = await this.booking.createOne(newBookingPayload);

      //CREATE PAYMENT
      const payment = await this.payment.usePaystack({
        amount: Number(`${total_cost}00`),
        name: `${first_name} ${last_name}`,
        email: email,
        reference: bookingReference,
        currency: "NGN",
      });
      // add transaction record
      const transaction = await this.transaction.createOne({
        booking: booking._id,
        payment_method: "PAYSTACK",
        status: "pending",
        ref_no: bookingReference,
      });

      //SEND CONFIRMATION EMAIL

      //RETURN DATA
      const data = {
        user,
        booking,
        transaction,
        payment,
      };

      this.http.Response({
        res,
        status: "success",
        statusCode: 201,
        message: "Booking Order Created!",
        data,
      });
    } catch (error) {
      return next(error);
    }
  }
}
