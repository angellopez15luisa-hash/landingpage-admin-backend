import { NextFunction, Request, Response } from "express";
import { z } from "zod";

export const validate =
  (schema: z.ZodType) =>
  (req: Request, res: Response, next: NextFunction) => {};
