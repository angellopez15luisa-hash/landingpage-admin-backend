import { HeroSection } from "../models";
import { IMessageResponse } from "./custom";

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
