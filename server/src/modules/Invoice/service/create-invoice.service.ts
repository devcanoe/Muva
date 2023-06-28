import { injectable } from "tsyringe";
import Service from "../../../common/interface/service.interface";
import { NextFunction, Request, Response } from "express";
import Http from "../../../common/utils/http.utils";
import InvoiceRepository from "../repository/invoice.repository";
import Invoice from "../../../common/database/model/invoice.model";

@injectable()
export default class CreateInvoiceService implements Service<Request, Response, NextFunction> {
  constructor(private invoiceRepository: InvoiceRepository, private http: Http) {}
  async execute(req: Request<{}, any, Invoice>, res: Response, next: NextFunction): Promise<void> {
    try {


      const data = await this.invoiceRepository.createOne(req.body);

      this.http.Response({
        res,
        status: "success",
        statusCode: 201,
        message: "Invoice Created!",
        data,
      });
    } catch (error) {
      return next(error);
    }
  }
}
