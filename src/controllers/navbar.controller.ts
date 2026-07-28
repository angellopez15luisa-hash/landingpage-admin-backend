import { Request, Response, NextFunction } from "express";
import { NavbarType } from "../types";
import { Navbar } from "../models";

export class NavbarController {
  static get = async (
    req: Request<{}, {}, {}, {}>,
    res: Response<NavbarType.GetResponse>,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const navbar = await Navbar.findOne({
        attributes: ["id", "textLogo", "hrefLogo", "textBtn", "hrefBtn"],
        order: [["id", "asc"]],
      });

      res.status(200).json({
        success: true,
        navbar: navbar,
      });
    } catch (error) {
      next(error);
    }
  };

  static update = async (
    req: Request<NavbarType.UpdateParams, {}, NavbarType.UpdateInput, {}>,
    res: Response<NavbarType.UpdateResponse>,
    next: NextFunction,
  ): Promise<void> => {
    const navbar = res.locals.navbar;
    Object.assign(navbar, {
      ...req.body,
    });
    await navbar.save();
    try {
      res.status(201).json({
        message: "Navbar actualizada satisfactoriamente",
        success: true,
      });
    } catch (error) {
      next(error);
    }
  };
}
