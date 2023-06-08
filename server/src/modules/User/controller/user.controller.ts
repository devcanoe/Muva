import { injectable } from "tsyringe";
import GetUserService from "../services/get.user";
import GetUsersService from "../services/get.users";
import CreateUserService from "../services/create.user";
import EditUserService from "../services/edit.user";
import DeleteUserService from "../services/delete.user";
import { NextFunction, Request, Response } from "express";
import Controller from "../../../common/interface/controller.interface";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";

@injectable()
export default class UserController implements Controller<Request, Response, NextFunction> {
  constructor(
    private getUser: GetUserService,
    private getUsers: GetUsersService,
    private createUser: CreateUserService,
    private updateUser: EditUserService,
    private deleteUser: DeleteUserService
  ) {}
  async readOne(
    req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>,
    res: Response<any, Record<string, any>>,
    next: NextFunction
  ): Promise<any> {
    await this.getUser.execute(req, res, next);
  }
  async readAll(
    req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>,
    res: Response<any, Record<string, any>>,
    next: NextFunction
  ): Promise<any> {
    await this.getUsers.execute(req, res, next);
  }
  async createOne(
    req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>,
    res: Response<any, Record<string, any>>,
    next: NextFunction
  ): Promise<any> {
    await this.createUser.execute(req, res, next);
  }
  async updateOne(
    req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>,
    res: Response<any, Record<string, any>>,
    next: NextFunction
  ): Promise<any> {
    await this.updateUser.execute(req, res, next);
  }
  async deleteOne(
    req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>,
    res: Response<any, Record<string, any>>,
    next: NextFunction
  ): Promise<any> {
    await this.deleteUser.execute(req, res, next);
  }
}
