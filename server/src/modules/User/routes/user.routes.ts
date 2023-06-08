import { Request, Response, NextFunction, Router } from "express";
import { container } from "tsyringe";
import UserController from "../controller/user.controller";

const userRoute = Router();

const userController = container.resolve(UserController);

userRoute
  .get("/all", (req: Request, res: Response, next: NextFunction) => userController.readAll(req, res, next))
  .get("/:id", (req: Request, res: Response, next: NextFunction) => userController.readOne(req, res, next))
  .post("/new", (req: Request, res: Response, next: NextFunction) => userController.createOne(req, res, next))
  .patch("/:id", (req: Request<{ id: string }>, res: Response, next: NextFunction) => userController.updateOne(req, res, next))
  .delete("/:id", (req: Request<{ id: string }>, res: Response, next: NextFunction) => userController.deleteOne(req, res, next));

export default userRoute;
