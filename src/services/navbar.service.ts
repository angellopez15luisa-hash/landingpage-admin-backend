import { Navbar } from "../models";
import { NavbarType } from "../types";
import { CustomError } from "../types/custom";

export class NavbarService {
  static async get(): Promise<NavbarType.Response> {
    return await Navbar.findOne({
      attributes: ["id", "textLogo", "hrefLogo", "textBtn", "hrefBtn"],
      order: [["id", "asc"]],
    });
  }

  static async getById(id: Navbar["id"]): Promise<NavbarType.Response> {
    const navbar = await Navbar.findByPk(id);
    if (!navbar) throw new CustomError("navbar no existe", 404);
    return navbar;
  }

  static async update(
    id: Navbar["id"],
    data: NavbarType.UpdateBody,
  ): Promise<void> {
    const navbar = await this.getById(id);
    await navbar.update(data);
  }
}
