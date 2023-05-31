import { injectable } from "tsyringe";
import GetUserService from "../services/get.user";
import GetUsersService from "../services/get.users";
import CreateUserService from "../services/create.user";
import EditUserService from "../services/edit.user";
import DeleteUserService from "../services/delete.user";
import { NextFunction, Request, Response } from "express";

@injectable()
export default class UserController {
  constructor(
    private getOne: GetUserService,
    private getAll: GetUsersService,
    private create: CreateUserService,
    private update: EditUserService,
    private remove: DeleteUserService
  ) {}
  async readOne(req: Request, res: Response, next: NextFunction) {
    await this.getOne.execute(req, res, next);
  }
  async readAll(req: Request, res: Response, next: NextFunction) {
    await this.getAll.execute(req, res, next);
  }
  async post(req: Request, res: Response, next: NextFunction) {
    await this.create.execute(req, res, next);
  }
  async patch(req: Request<{ id: string }>, res: Response, next: NextFunction) {
    await this.update.execute(req, res, next);
  }
  async delete(req: Request<{id: string}>, res: Response, next: NextFunction) {
    await this.remove.execute(req, res, next);
  }
}
