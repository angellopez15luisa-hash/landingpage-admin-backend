import z from "zod";
import { HeroSection } from "../models";
import { HeroSectionSchema } from "../schemas";
import { IMessageResponse, MessageResponse } from "./custom";

export type IHeroSection = Pick<
  HeroSection,
  "id" | "imagePath" | "tag" | "title" | "highlightText" | "description"
>;

export type IHeroSectionCreateBody = Omit<IHeroSection, "id">;

export type IHeroSectionUpdateBody = Omit<IHeroSection, "id">;

export type IHeroSectionUpdateParams = Pick<IHeroSection, "id">;

export interface IHeroSectionGetAllResponse extends Omit<
  IMessageResponse,
  "message"
> {
  heroSections: IHeroSection[];
}

export type IHeroSectionUpdateResponse = IMessageResponse;

export namespace HeroSectionType {
  export type UpdateParams = z.infer<typeof HeroSectionSchema.update>["params"];

  export type UpdateBody = z.infer<typeof HeroSectionSchema.update>["body"];

  export type GetParams = z.infer<typeof HeroSectionSchema.getById>["params"];

  export type Response = HeroSection;

  export type GetResponse = Omit<MessageResponse, "message"> & {
    heroSection: Response;
  };

  export type GetAllResponse = Omit<MessageResponse, "message"> & {
    heroSections: Response[];
  };
  export type UpdateResponse = MessageResponse;
}
