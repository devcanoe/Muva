import { injectable } from "tsyringe";
import GuestReserveSeatService from "../../services/reservation/guest-reserve.seat";
import { NextFunction, Request, Response } from "express";

@injectable()
export default class ReservationController {
  constructor(private guestReserve: GuestReserveSeatService) {}
  async guest(req: Request, res: Response, next: NextFunction) {
    await this.guestReserve.execute(req, res, next);
  }
}
