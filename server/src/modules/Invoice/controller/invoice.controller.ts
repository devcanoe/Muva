import { injectable } from "tsyringe";
import { NextFunction, Request, Response } from "express";
import CreateInvoiceService from "../service/create-invoice.service";


@injectable()
export default class InvoiceController {
  constructor(
    private createInvoiceService: CreateInvoiceService
  ) {}
    
  async createInvoice(req: Request, res: Response, next: NextFunction){
    await this.createInvoiceService.execute(req, res, next);
  }
}
