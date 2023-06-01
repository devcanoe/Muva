import { Request, Response, NextFunction, Router } from "express";
import { container } from "tsyringe";
import TripController from "../controller/trip.controller";

const tripRoute = Router();

const tripController = container.resolve(TripController);

tripRoute
  .get("/all", (req: Request, res: Response, next: NextFunction) => tripController.readAll(req, res, next))
  .get("/:id", (req: Request, res: Response, next: NextFunction) => tripController.readOne(req, res, next))
  .post("/new", (req: Request, res: Response, next: NextFunction) => tripController.post(req, res, next))
  .patch("/:id", (req: Request<{ id: string }>, res: Response, next: NextFunction) =>
    tripController.patch(req, res, next)
  )
  .delete("/:id", (req: Request<{ id: string }>, res: Response, next: NextFunction) =>
    tripController.delete(req, res, next)
  );

export default tripRoute;
