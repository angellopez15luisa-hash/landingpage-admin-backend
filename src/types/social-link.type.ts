import { SocialLink } from "../models";
import { IMessageResponse, MessageResponse } from "./custom";
import { SocialLinkSchema } from "../schemas";
import z from "zod";

export type ISocialLink = Pick<
  SocialLink,
  "id" | "name" | "url" | "icon" | "flag"
>;

export type ISocialLinkCreateBody = Omit<ISocialLink, "id">;

export type ISocialLinkUpdateBody = Omit<ISocialLink, "id">;

export type ISocialLinkUpdateParams = Pick<ISocialLink, "id">;

export interface ISocialLinkGetAllResponse extends Omit<
  IMessageResponse,
  "message"
> {
  socialLinks: ISocialLink[];
}

export type ISocialLinkUpdateResponse = IMessageResponse;

export namespace SocialLinkType {
  export type UpdateParams = z.infer<typeof SocialLinkSchema.update>["params"];

  export type UpdateBody = z.infer<typeof SocialLinkSchema.update>["body"];

  export type Response = SocialLink;

  export type GetAllResponse = Omit<MessageResponse, "message"> & {
    socialLinks: Response[];
  };

  export type UpdateResponse = MessageResponse;
}
