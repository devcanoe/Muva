import { injectable } from "tsyringe";
import Service from "../../../common/interface/service.interface";
import { Request, Response, NextFunction } from "express";
import UserRepository from "../repository/user.repository";
import Http from "../../../common/utils/http.utils";

@injectable()
export default class DeleteUserService implements Service<Request, Response, NextFunction> {
  constructor(private userRepository: UserRepository, private http: Http) {}
  async execute(req: Request<{ id: string }>, res: Response, next: NextFunction): Promise<void> {
    try {
      const { id } = req.params;
      await this.userRepository.delete({ _id: id });

      this.http.Response({
        res,
        status: "success",
        statusCode: 200,
        message: "User Successfully Deleted!",
      });
    } catch (error) {
      return next(error);
    }
  }
}
