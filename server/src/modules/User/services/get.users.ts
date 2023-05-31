import { injectable } from "tsyringe";
import Service from "../../../common/interface/service.interface";
import { Request, Response, NextFunction } from "express";
import UserRepository from "../repository/user.repository";
import Http from "../../../common/utils/http.utils";

@injectable()
export default class GetUsersService implements Service<Request, Response, NextFunction> {
  constructor(private userRepository: UserRepository, private http: Http) {}
  async execute(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const data = await this.userRepository.getAll();

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
