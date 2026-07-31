import { Navbar } from "../models";
import { IMessageResponse } from "./custom";

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
