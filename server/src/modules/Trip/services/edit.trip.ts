import { injectable } from "tsyringe";
import Service from "../../../common/interface/service.interface";
import { NextFunction, Request, Response } from "express";
import TripRepository from "../repository/trip.repository";
import Http from "../../../common/utils/http.utils";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";
import Trip from "../../../common/database/model/trip.model";

@injectable()
export default class EditTripService implements Service<Request, Response, NextFunction> {
  constructor(private tripRepository: TripRepository, private http: Http) {}
  async execute(
    req: Request<ParamsDictionary, any, Trip, ParsedQs, Record<string, any>>,
    res: Response<any, Record<string, any>>,
    next: NextFunction
  ): Promise<void> {
    try {
      const { id } = req.params;
      const {
        departure_location,
        departure_time,
        arrival_location,
        arrival_time,
        trip_date,
        seat_cost,
        capacity,
        vehicle,
      } = req.body;

      const newUserPayload: Trip = {
        departure_location,
        departure_time,
        arrival_location,
        arrival_time,
        trip_date,
        seat_cost,
        capacity,
        vehicle,
      };
      const data = await this.tripRepository.update({ _id: id }, newUserPayload);

      this.http.Response({
        res,
        status: "success",
        statusCode: 201,
        message: "Trip Successfully Created!",
        data,
      });
    } catch (error) {
      return next(error);
    }
  }
}
