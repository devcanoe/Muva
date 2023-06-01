import { injectable } from "tsyringe";
import GetBookingService from "../services/get.booking";
import GetBookingsService from "../services/get.bookings";
import CreateBookingService from "../services/create.booking";
import EditBookingService from "../services/edit.booking";
import DeleteBookingService from "../services/delete.booking";
import { NextFunction, Request, Response } from "express";


@injectable()
export default class BookingController {
  constructor(
    private getOne: GetBookingService,
    private getAll: GetBookingsService,
    private create: CreateBookingService,
    private edit: EditBookingService,
    private remove: DeleteBookingService
  ) {}
  async readOne(req: Request<{ id: string }>, res: Response, next: NextFunction) {
    await this.getOne.execute(req, res, next);
  }
  async readAll(req: Request, res: Response, next: NextFunction) {
    await this.getAll.execute(req, res, next);
  }
  async post(req: Request, res: Response, next: NextFunction) {
    await this.create.execute(req, res, next);
  }
  async patch(req: Request<{ id: string }>, res: Response, next: NextFunction) {
    await this.edit.execute(req, res, next);
  }
  async delete(req: Request<{ id: string }>, res: Response, next: NextFunction) {
    await this.remove.execute(req, res, next);
  }
}
