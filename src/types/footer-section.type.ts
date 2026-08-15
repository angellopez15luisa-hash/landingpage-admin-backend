import z from "zod";
import { FooterSection } from "../models";
import { IMessageResponse, MessageResponse } from "./custom";
import { FooterSectionSchema } from "../schemas";

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

export namespace FooterSectionType {
  export type UpdateParams = z.infer<
    typeof FooterSectionSchema.update
  >["params"];

  export type UpdateBody = z.infer<typeof FooterSectionSchema.update>["body"];

  export type Response = FooterSection;

  export type GetResponse = Omit<MessageResponse, "message"> & {
    footerSection: Response;
  };

  export type UpdateResponse = MessageResponse;
}
