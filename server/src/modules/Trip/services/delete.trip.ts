import { injectable } from "tsyringe";
import Service from "../../../common/interface/service.interface";
import { NextFunction, Request, Response } from "express";
import TripRepository from "../repository/trip.repository";
import Http from "../../../common/utils/http.utils";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";

@injectable()
export default class DeleteTripService implements Service<Request, Response, NextFunction> {
  constructor(private tripRepository: TripRepository, private http: Http) {}
  async execute(
    req: Request<{ id: string }, any, any, ParsedQs, Record<string, any>>,
    res: Response<any, Record<string, any>>,
    next: NextFunction
  ): Promise<void> {
    try {
      const { id } = req.params;
      await this.tripRepository.delete({ _id: id });

      this.http.Response({
        res,
        status: "success",
        statusCode: 200,
        message: "Trip Successfully Deleted!",
      });
    } catch (error) {
      return next(error);
    }
  }
}
