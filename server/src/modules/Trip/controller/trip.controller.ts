import { injectable } from "tsyringe";
import GetTripService from "../services/get.trip";
import GetTripsService from "../services/get.trips";
import CreateTripService from "../services/create.trip";
import EditTripService from "../services/edit.trip";
import DeleteTripService from "../services/delete.trip";
import { Request, Response, NextFunction } from "express";
import Controller from "../../../common/interface/controller.interface";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";

@injectable()
export default class TripController implements Controller<Request, Response, NextFunction> {
  constructor(
    private getTrip: GetTripService,
    private getTrips: GetTripsService,
    private createTrip: CreateTripService,
    private updateTrip: EditTripService,
    private deleteTrip: DeleteTripService
  ) {}
  async readOne(
    req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>,
    res: Response<any, Record<string, any>>,
    next: NextFunction
  ): Promise<any> {
    await this.getTrip.execute(req, res, next);
  }
  async readAll(
    req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>,
    res: Response<any, Record<string, any>>,
    next: NextFunction
  ): Promise<any> {
    await this.getTrips.execute(req, res, next);
  }
  async createOne(
    req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>,
    res: Response<any, Record<string, any>>,
    next: NextFunction
  ): Promise<any> {
    await this.createTrip.execute(req, res, next);
  }
  async updateOne(
    req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>,
    res: Response<any, Record<string, any>>,
    next: NextFunction
  ): Promise<any> {
    await this.updateTrip.execute(req, res, next);
  }
  async deleteOne(
    req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>,
    res: Response<any, Record<string, any>>,
    next: NextFunction
  ): Promise<any> {
    await this.deleteTrip.execute(req, res, next);
  }
}
