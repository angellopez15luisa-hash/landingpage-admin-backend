import { ItemSection } from "../models";
import { IMessageResponse } from "./custom";

export type IItemSection = Pick<
  ItemSection,
  "id" | "text" | "href" | "flagNavbar" | "flagFooter"
>;

export type IItemSectionCreateBody = Omit<IItemSection, "id">;

export type IItemSectionUpdateBody = Omit<IItemSection, "id">;

export type IItemSectionUpdateParams = Pick<IItemSection, "id">;

export interface IItemSectionGetAllResponse extends Omit<
  IMessageResponse,
  "message"
> {
  itemSections: IItemSection[];
}

export type IItemSectionUpdateResponse = IMessageResponse;
