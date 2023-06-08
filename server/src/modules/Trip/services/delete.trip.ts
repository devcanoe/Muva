import { injectable } from "tsyringe";
import Service from "../../../common/interface/service.interface";
import { NextFunction, Request, Response } from "express";
import TripRepository from "../repository/trip.repository";
import Http from "../../../common/utils/http.utils";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";
import ErrorUtils from "../../../common/utils/error.utils";

@injectable()
export default class DeleteTripService implements Service<Request, Response, NextFunction> {
  constructor(private trip: TripRepository, private http: Http) {}
  async execute(
    req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>,
    res: Response<any, Record<string, any>>,
    next: NextFunction
  ): Promise<void> {
    try {
      const { id } = req.params;
      const data = await this.trip.deleteOne(id);

      if (!data) return next(new ErrorUtils("Trip not Found!", 404));

      this.http.Response({
        res,
        status: "success",
        statusCode: 200,
        message: "Trip Deleted!",
      });
    } catch (error) {
      return next(error);
    }
  }
}
