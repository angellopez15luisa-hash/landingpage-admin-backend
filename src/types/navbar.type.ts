import { Navbar } from "../models";
import { IMessageResponse } from "./custom";
// import { Navbar } from "../models";

// export type INavbar = z.infer<typeof navbarSchema>;

// export type NavbarCreateBody = Omit<Navbar, "id">;

// export type NavbarUpdateBody = Omit<Navbar, "id">;

// export type NavbarUpdateParams = Pick<Navbar, "id">;

// export type NavbarGetResponse = z.Infer<typeof navbarGetResponseSchema>;

// export type NavbarUpdateResponse = z.infer<typeof navbarUpdateResponseSchema>;

// -----------------------------------------------------------------------------

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
