import { Request, Response, NextFunction, Router } from "express";
import { container } from "tsyringe";
import BookingController from "../controller/booking.controller";

const bookingRoute = Router();

const booking = container.resolve(BookingController);
bookingRoute
  .get("/all", (req: Request, res: Response, next: NextFunction) => booking.readAll(req, res, next))
  .get("/:id", (req: Request<{ id: string }>, res: Response, next: NextFunction) => booking.readOne(req, res, next))

  .post("/confirm-payment", (req: Request, res: Response, next: NextFunction) => booking.confirm(req, res, next))
  .post("/guest-reserve", (req: Request, res: Response, next: NextFunction) => booking.guest(req, res, next))
  .post("/user-reserve", (req: Request, res: Response, next: NextFunction) => booking.user(req, res, next));

export default bookingRoute;
