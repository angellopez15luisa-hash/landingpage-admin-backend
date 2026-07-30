import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";

export class ValidateMiddleware {
 static validate = (req: Request, res: Response, next: NextFunction): void => {
    // 1. Capturamos los errores de express-validator
    const errors = validationResult(req);

    // 2. Si hay errores, respondemos con un código 400 y el listado de fallos
    if (!errors.isEmpty()) {
      res.status(400).json({
        success: false,
        status: 400,
        errors: errors.array().map((err) => ({
          field: (err as any).path || (err as any).param,
          message: err.msg,
        })),
      });
      return;
    }

    // 3. Si todo está bien, pasa al siguiente controlador o middleware
    next();
  };
}
