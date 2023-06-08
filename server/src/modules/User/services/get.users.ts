import { injectable } from "tsyringe";
import Service from "../../../common/interface/service.interface";
import { Request, Response, NextFunction } from "express";
import UserRepository from "../repository/user.repository";
import Http from "../../../common/utils/http.utils";

@injectable()
export default class GetUsersService implements Service<Request, Response, NextFunction> {
  constructor(private user: UserRepository, private http: Http) {}
  async execute(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const data = await this.user.readAll(req.query);

      this.http.Response({
        res,
        status: "success",
        statusCode: 200,
        message: "All Users Retrieved",
        data,
      });
    } catch (error) {
      return next(error);
    }
  }
}
