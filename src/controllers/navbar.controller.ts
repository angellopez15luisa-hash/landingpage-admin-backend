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
}
