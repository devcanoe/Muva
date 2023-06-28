import { Request, Response, NextFunction, Router } from "express";
import { container } from "tsyringe";
import InvoiceController from "../controller/invoice.controller";

const invoiceRoute = Router();

const invoiceController = container.resolve(InvoiceController);

invoiceRoute
  .post("/create", (req: Request, res: Response, next: NextFunction) => invoiceController.createInvoice(req, res, next))

export default invoiceRoute;
