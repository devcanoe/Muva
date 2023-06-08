import { injectable } from "tsyringe";
import Service from "../../../common/interface/service.interface";
import { Request, Response, NextFunction } from "express";
import UserRepository from "../repository/user.repository";
import Http from "../../../common/utils/http.utils";
import User from "../../../common/database/model/user.model";
import { ParamsDictionary } from "express-serve-static-core";

@injectable()
export default class EditUserService implements Service<Request, Response, NextFunction> {
  constructor(private user: UserRepository, private http: Http) {}
  async execute(req: Request<ParamsDictionary, any, User>, res: Response, next: NextFunction): Promise<void> {
    try {
      const { id } = req.params;
      const { first_name, last_name, email, role, password, phone, gender } = req.body;

      const newUserPayload: User = {
        first_name,
        last_name,
        email,
        role,
        password,
        phone,
        gender,
        updated_at: new Date(),
      };
      const data = await this.user.updateOne({ _id: id }, newUserPayload);

      this.http.Response({
        res,
        status: "success",
        statusCode: 201,
        message: "User Successfully Updated!",
        data,
      });
    } catch (error) {
      return next(error);
    }
  }
}
