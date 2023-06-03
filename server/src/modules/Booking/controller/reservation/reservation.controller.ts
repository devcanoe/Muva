import { injectable } from "tsyringe";
import GuestReserveSeatService from "../../services/reservation/guest-reserve.seat";
import { NextFunction, Request, Response } from "express";
import UserReserveSeatService from "../../services/reservation/user-reserve.seat";

@injectable()
export default class ReservationController {
  constructor(private guestReserve: GuestReserveSeatService, private userReserve: UserReserveSeatService) {}
  async guest(req: Request, res: Response, next: NextFunction) {
    await this.guestReserve.execute(req, res, next);
  }
  async user(req: Request, res: Response, next: NextFunction) {
    await this.userReserve.execute(req, res, next);
  }
}
