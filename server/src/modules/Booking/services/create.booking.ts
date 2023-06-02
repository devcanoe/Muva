import { injectable } from "tsyringe";
import Service from "../../../common/interface/service.interface";
import { NextFunction, Request, Response } from "express";
import BookingRepository from "../repository/booking.repository";
import Http from "../../../common/utils/http.utils";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";
import Booking from "../../../common/database/model/booking.model";
import { short_id } from "../../../common/utils/uuid.utils";
import { makePayment } from "../../../common/utils/paystack.utils";
import UserRepository from "../../User/repository/user.repository";
import User from "../../../common/database/model/user.model";
import TripRepository from "../../Trip/repository/trip.repository";
import Trip from "../../../common/database/model/trip.model";
import PaymentRepository from "../../Payment/repository/payment.repository";

@injectable()
export default class CreateBookingService implements Service<Request, Response, NextFunction> {
  constructor(
    private bookingRepository: BookingRepository,
    private http: Http,
    private tripRepository: TripRepository,
    private userRepository: UserRepository,
    private paymentRepository: PaymentRepository
  ) {}
  async execute(
    req: Request<ParamsDictionary, any, Booking, ParsedQs, Record<string, any>>,
    res: Response<any, Record<string, any>>,
    next: NextFunction
  ): Promise<void> {
    try {
      const { trip, user, ref_no } = req.body;

      const bookingReference = `bk_${short_id()}`;
      const newBookingPayload: Booking = {
        trip,
        user,
        ref_no: bookingReference,
      };

      const booking: Booking = await this.bookingRepository.create(newBookingPayload);

      const paystackPayloadTrip: Trip = await this.tripRepository.getOne({ _id: booking.trip });
      const paystackPayloadUSer: User = await this.userRepository.getOne({ _id: booking.user });

      //initialize paystack
      const payment_url = await makePayment({
        amount: paystackPayloadTrip.seat_cost,
        name: `${paystackPayloadUSer.first_name} ${paystackPayloadUSer.last_name}` || " ",
        email: paystackPayloadUSer.email || "",
        reference: bookingReference,
        currency: "NGN",
      });
      // add transaction record

      const payment_ref = await this.paymentRepository.create({
        booking: booking._id,
        payment_method: "PAYSTACK",
        status: "pending",
        ref_no: bookingReference,
      });

      const data = {
        booking,
        payment_url,
        payment_ref,
      };
      this.http.Response({
        res,
        status: "success",
        statusCode: 201,
        message: "Booking Created Successfully",
        data,
      });
    } catch (error) {
      return next(error);
    }
  }
}
