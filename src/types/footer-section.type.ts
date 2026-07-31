import { FooterSection } from "../models";
import { IMessageResponse } from "./custom";

export type IFooterSection = Pick<
  FooterSection,
  | "id"
  | "textLogo"
  | "description"
  | "phone"
  | "iconPhone"
  | "email"
  | "iconEmail"
  | "address"
  | "iconAddress"
  | "hours"
  | "iconHours"
>;

export type IFooterSectionCreateBody = Omit<IFooterSection, "id">;

export type IFooterSectionUpdateBody = Omit<IFooterSection, "id">;

export type IFooterSectionUpdateParams = Pick<IFooterSection, "id">;

// export interface IFooterSectionGetAllResponse extends Omit<
//   IMessageResponse,
//   "message"
// > {
//   footerSections: IFooterSection[];
// }

export interface IFooterSectionGetResponse extends Omit<
  IMessageResponse,
  "message"
> {
  footerSection: IFooterSection;
}

export type IFooterSectionUpdateResponse = IMessageResponse;
