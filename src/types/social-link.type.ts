import { SocialLink } from "../models";
import { IMessageResponse } from "./custom";

export type ISocialLink = Pick<SocialLink, "id" | "name" | "url" | "icon" | "flag">;

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