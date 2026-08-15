import z from "zod";
import { Navbar } from "../models";
import { IMessageResponse, MessageResponse } from "./custom";
import { NavbarSchema } from "../schemas";

export type INavbar = Pick<
  Navbar,
  "id" | "textLogo" | "hrefLogo" | "textBtn" | "hrefBtn"
>;

export type INavbarCreateBody = Omit<INavbar, "id">;

export type INavbarUpdateBody = Omit<INavbar, "id">;

export type INavbarUpdateParams = Pick<INavbar, "id">;

export interface INavbarGetResponse extends Omit<IMessageResponse, "message"> {
  navbar: INavbar;
}

export type INavbarUpdateResponse = IMessageResponse;

export namespace NavbarType {
  export type UpdateParams = z.Infer<typeof NavbarSchema.update>["params"];

  export type UpdateBody = z.infer<typeof NavbarSchema.update>["body"];

  export type Response = Navbar;

  export type GetReponse = Omit<MessageResponse, "message"> & {
    navbar: Response;
  };

  export type UpdateResponse = MessageResponse;
}
