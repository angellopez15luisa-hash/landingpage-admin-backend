import { NextFunction, Request, Response } from "express";
import { Navbar } from "../models";
import { CustomError } from "../types/custom";
import { INavbarUpdateParams } from "../types/navbar.type";

export class NavbarMiddleware {
  static exists = async (
    req: Request<INavbarUpdateParams, {}, {}, {}>,
    res: Response<void>,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const { id } = req.params;
      const navbar = await Navbar.findByPk(id);
      if (!navbar) {
        const error = new CustomError("Navbar no existe", 404);
        return next(error);
      }
      res.locals.navbar = navbar;
      next();
    } catch (error) {
      next(error);
    }
  };
}
