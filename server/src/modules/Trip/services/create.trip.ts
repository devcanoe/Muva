import { injectable } from "tsyringe";
import Service from "../../../common/interface/service.interface";
import { NextFunction, Request, Response } from "express";
import TripRepository from "../repository/trip.repository";
import Http from "../../../common/utils/http.utils";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";
import Trip from "../../../common/database/model/trip.model";

@injectable()
export default class CreateTripService implements Service<Request, Response, NextFunction> {
  constructor(private trip: TripRepository, private http: Http) {}
  async execute(
    req: Request<ParamsDictionary, any, Trip, ParsedQs, Record<string, any>>,
    res: Response<any, Record<string, any>>,
    next: NextFunction
  ): Promise<void> {
    try {
      const data = await this.trip.createOne(req.body);

      this.http.Response({
        res,
        status: "success",
        statusCode: 201,
        message: "Trip Created!",
        data,
      });
    } catch (error) {
      return next(error);
    }
  }
}
