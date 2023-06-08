export default interface Controller<Request, Response, NextFunction> {
  readOne(req: Request, res: Response, next: NextFunction): Promise<any>;
  readAll(req: Request, res: Response, next: NextFunction): Promise<any>;
  createOne(req: Request, res: Response, next: NextFunction): Promise<any>;
  updateOne(req: Request, res: Response, next: NextFunction): Promise<any>;
  deleteOne(req: Request, res: Response, next: NextFunction): Promise<any>;
}
