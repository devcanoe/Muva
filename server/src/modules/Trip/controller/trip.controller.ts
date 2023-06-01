import { injectable } from "tsyringe";
import GetTripService from "../services/get.trip";
import GetTripsService from "../services/get.trips";
import CreateTripService from "../services/create.trip";
import EditTripService from "../services/edit.trip";
import DeleteTripService from "../services/delete.trip";
import { Request, Response, NextFunction } from "express";

@injectable()
export default class TripController {
  constructor(
    private getOne: GetTripService,
    private getAll: GetTripsService,
    private create: CreateTripService,
    private update: EditTripService,
    private remove: DeleteTripService
  ) {}
  async readOne(req: Request, res: Response, next: NextFunction) {
    await this.getOne.execute(req, res, next);
  }
  async readAll(req: Request, res: Response, next: NextFunction) {
    await this.getAll.execute(req, res, next);
  }
  async post(req: Request, res: Response, next: NextFunction) {
    await this.create.execute(req, res, next);
  }
  async patch(req: Request<{ id: string }>, res: Response, next: NextFunction) {
    await this.update.execute(req, res, next);
  }
  async delete(req: Request<{ id: string }>, res: Response, next: NextFunction) {
    await this.remove.execute(req, res, next);
  }
}
