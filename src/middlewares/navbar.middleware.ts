import { NextFunction, Request, Response } from "express";
import { NavbarType } from "../types";
import { Navbar } from "../models";
import { CustomError } from "../types/custom";

export class NavbarMiddleware {
  static exists = async (
    req: Request<NavbarType.UpdateParams, {}, {}, {}>,
    res: Response<void>,
    next: NextFunction,
  ): Promise<void> => {
      try {
        console.log("first")
        const { id } = req.params;
        console.log(id)
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
