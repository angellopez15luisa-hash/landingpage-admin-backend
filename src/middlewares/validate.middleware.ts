import { NextFunction, Request, Response } from "express";
import { z } from "zod";

export class ValidateMiddleware {
  static validate =
    <T extends z.ZodType>(schema: T) =>
    async (req: Request, res: Response, next: NextFunction): Promise<void> => {
      try {
        await schema.parseAsync({
          body: req.body,
          query: req.query,
          params: req.params,
        });
          console.log("ddd")
        next();
      } catch (error: unknown) {
        if (error instanceof z.ZodError) {
          const errZod = error as any;
          res.status(400).json({
            status: "error",
            errors: errZod.errors.map((err) => ({
              field: err.path.join("."),
              message: err.message,
            })),
          });
          return;
        }

        res.status(500).json({
          status: "error",
          message: "Error interno de validación",
        });
        return;
      }
    };
}
