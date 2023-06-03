import { injectable } from "tsyringe";
import Service from "../../../../common/interface/service.interface";
import { NextFunction, Request, Response } from "express";
import UserRepository from "../../../User/repository/user.repository";
import BookingRepository from "../../repository/booking.repository";
import PaymentRepository from "../../../Payment/repository/payment.repository";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";
import User from "../../../../common/database/model/user.model";
import Booking from "../../../../common/database/model/booking.model";
import { short_id } from "../../../../common/utils/uuid.utils";
import { makePayment } from "../../../../common/utils/paystack.utils";
import TripRepository from "../../../Trip/repository/trip.repository";
import Http from "../../../../common/utils/http.utils";

@injectable()
export default class UserReserveSeatService implements Service<Request, Response, NextFunction> {
  constructor(
    private userRepository: UserRepository,
    private bookingRepository: BookingRepository,
    private paymentRepository: PaymentRepository,
    private tripRepository: TripRepository,
    private http: Http
  ) {}
  async execute(
    req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>,
    res: Response<any, Record<string, any>>,
    next: NextFunction
  ): Promise<any> {
    try {
      const { trip, user } = req.body;
      //CREATE USER
      const person = await this.userRepository.getOne({ _id: user });

      //CREATE BOOKING
      const bookingReference = `bk_${short_id()}`;
      const newBookingPayload: Booking = {
        trip,
        user: user._id,
        ref_no: bookingReference,
      };
      const booking = await this.bookingRepository.create(newBookingPayload);
      const journey = await this.tripRepository.getOne({ _id: trip });
      //CREATE PAYMENT
      const payment_url = await makePayment({
        amount: `${journey.seat_cost}00`,
        name: `${person.first_name} ${person.last_name}`,
        email: person.email,
        reference: bookingReference,
        currency: "NGN",
      });
      // add transaction record
      const payment = await this.paymentRepository.create({
        booking: booking._id,
        payment_method: "PAYSTACK",
        status: "pending",
        ref_no: bookingReference,
      });

      //UPDATE SEAT CAPACITY
      const reduce_seat = journey.capacity - 1;
      await this.tripRepository.update({ _id: trip }, { capacity: reduce_seat });

      //RETURN DATA
      const data = {
        user,
        booking,
        payment,
        payment_url,
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
