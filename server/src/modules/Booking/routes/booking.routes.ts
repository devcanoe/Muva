import { Request, Response, NextFunction, Router } from "express";
import { container } from "tsyringe";
import BookingController from "../controller/booking.controller";

const bookingRoute = Router();

const bookingController = container.resolve(BookingController);

bookingRoute
  .get("/all", (req: Request, res: Response, next: NextFunction) => bookingController.readAll(req, res, next))
  .get("/:id", (req: Request<{ id: string }>, res: Response, next: NextFunction) =>
    bookingController.readOne(req, res, next)
  )
  .post("/new", (req: Request, res: Response, next: NextFunction) => bookingController.post(req, res, next))
  .patch("/:id", (req: Request<{ id: string }>, res: Response, next: NextFunction) =>
    bookingController.patch(req, res, next)
  )
  .delete("/:id", (req: Request<{ id: string }>, res: Response, next: NextFunction) =>
    bookingController.delete(req, res, next)
  ).post("/confirm-payment", (req: Request, res: Response, next: NextFunction) => bookingController.watch(req, res, next) );

export default bookingRoute;
