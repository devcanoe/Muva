import { injectable } from "tsyringe";
import Service from "../../../common/interface/service.interface";
import { Request, Response, NextFunction } from "express";
import UserRepository from "../repository/user.repository";
import Http from "../../../common/utils/http.utils";
import { ParamsDictionary } from "express-serve-static-core";
import ErrorUtils from "../../../common/utils/error.utils";

@injectable()
export default class DeleteUserService implements Service<Request, Response, NextFunction> {
  constructor(private user: UserRepository, private http: Http) {}
  async execute(req: Request<ParamsDictionary>, res: Response, next: NextFunction): Promise<void> {
    try {
      const { id } = req.params;
      const user = await this.user.deleteOne(id);

      if (!user) return next(new ErrorUtils("User not Found!", 404));

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
