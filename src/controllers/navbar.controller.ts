import { Request, Response, NextFunction } from "express";
import { Navbar } from "../models";
import {
  INavbarGetResponse,
  INavbarUpdateBody,
  INavbarUpdateParams,
  INavbarUpdateResponse,
} from "../types/navbar.type";
import { NavbarType } from "../types";
import { NavbarService } from "../services";

export class NavbarController {
  static get = async (
    req: Request,
    res: Response<NavbarType.GetReponse>,
    next: NextFunction,
  ): Promise<void> => {
    try {
      // const navbar = await Navbar.findOne({
      //   attributes: ["id", "textLogo", "hrefLogo", "textBtn", "hrefBtn"],
      //   order: [["id", "asc"]],
      // });
      const navbar = await NavbarService.get();
      res.status(200).json({
        success: true,
        navbar: navbar,
      });
    } catch (error) {
      next(error);
    }
  };

  static update = async (
    req: Request<NavbarType.UpdateParams, {}, NavbarType.UpdateBody>,
    res: Response<NavbarType.UpdateResponse>,
    next: NextFunction,
  ): Promise<void> => {
    // const navbar = res.locals.navbar;
    // Object.assign(navbar, {
    //   ...req.body,
    // });
    // await navbar.save();

    try {
      const id = Number(req.params.id);
      await NavbarService.update(id, req.body);
      res.status(201).json({
        message: "Navbar actualizada satisfactoriamente",
        success: true,
      });
    } catch (error) {
      next(error);
    }
  };
}
