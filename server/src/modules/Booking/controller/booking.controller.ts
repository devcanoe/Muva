import { injectable } from "tsyringe";
import GetBookingService from "../services/get.booking";
import GetBookingsService from "../services/get.bookings";
import { NextFunction, Request, Response } from "express";
import ConfirmBookingService from "../services/confirm.booking";
import Controller from "../../../common/interface/controller.interface";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";
import GuestReserveSeatService from "../services/guest/guest.reserve.service";
import UserReserveSeatService from "../services/user/user.reserve.service";

@injectable()
export default class BookingController implements Controller<Request, Response, NextFunction> {
  constructor(
    private getBooking: GetBookingService,
    private getBookings: GetBookingsService,
    private checkBookings: ConfirmBookingService,
    private guestReserve: GuestReserveSeatService,
    private userReserve: UserReserveSeatService
  ) {}
  async readOne(
    req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>,
    res: Response<any, Record<string, any>>,
    next: NextFunction
  ): Promise<any> {
    await this.getBooking.execute(req, res, next);
  }
  async readAll(
    req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>,
    res: Response<any, Record<string, any>>,
    next: NextFunction
  ): Promise<any> {
    await this.getBookings.execute(req, res, next);
  }
  async createOne(
    req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>,
    res: Response<any, Record<string, any>>,
    next: NextFunction
  ): Promise<any> {}
  async updateOne(
    req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>,
    res: Response<any, Record<string, any>>,
    next: NextFunction
  ): Promise<any> {}
  async deleteOne(
    req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>,
    res: Response<any, Record<string, any>>,
    next: NextFunction
  ): Promise<any> {}
  async guest(
    req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>,
    res: Response<any, Record<string, any>>,
    next: NextFunction
  ): Promise<any> {
    await this.guestReserve.execute(req, res, next);
  }
  async user(
    req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>,
    res: Response<any, Record<string, any>>,
    next: NextFunction
  ): Promise<any> {
    await this.userReserve.execute(req, res, next);
  }
  async confirm(
    req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>,
    res: Response<any, Record<string, any>>,
    next: NextFunction
  ): Promise<any> {
    await this.checkBookings.execute(req, res, next);
  }
}
