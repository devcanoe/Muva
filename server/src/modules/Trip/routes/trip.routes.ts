import { Request, Response, NextFunction, Router } from "express";
import { container } from "tsyringe";
import TripController from "../controller/trip.controller";

const tripRoute = Router();

const trip = container.resolve(TripController);

tripRoute
  .get("/all", (req: Request, res: Response, next: NextFunction) => trip.readAll(req, res, next))
  .get("/:id", (req: Request, res: Response, next: NextFunction) => trip.readOne(req, res, next))
  .post("/new", (req: Request, res: Response, next: NextFunction) => trip.createOne(req, res, next))
  .patch("/:id", (req: Request, res: Response, next: NextFunction) => trip.updateOne(req, res, next))
  .delete("/:id", (req: Request, res: Response, next: NextFunction) => trip.deleteOne(req, res, next));

export default tripRoute;
