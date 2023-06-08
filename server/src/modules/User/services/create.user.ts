import { injectable } from "tsyringe";
import Service from "../../../common/interface/service.interface";
import { NextFunction, Request, Response } from "express";
import UserRepository from "../repository/user.repository";
import Http from "../../../common/utils/http.utils";
import User from "../../../common/database/model/user.model";

@injectable()
export default class CreateUserService implements Service<Request, Response, NextFunction> {
  constructor(private user: UserRepository, private http: Http) {}
  async execute(req: Request<{}, any, User>, res: Response, next: NextFunction): Promise<void> {
    try {


      const data = await this.user.createOne(req.body);

      this.http.Response({
        res,
        status: "success",
        statusCode: 201,
        message: "User Created!",
        data,
      });
    } catch (error) {
      return next(error);
    }
  }
}
