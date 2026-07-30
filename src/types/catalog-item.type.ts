import { CatalogItem } from "../models";
import { IMessageResponse } from "./custom";

export type ICatalogItem = Pick<CatalogItem, "id" | "title" | "catalogCategoryId" | "price" | "imagePath" | "badge">;

export type ICatalogItemCreateBody = Omit<ICatalogItem, "id">;

export type ICatalogItemUpdateBody = Omit<ICatalogItem, "id">;

export type ICatalogItemUpdateParams = Pick<ICatalogItem, "id">;

export interface ICatalogItemGetAllResponse extends Omit<
  IMessageResponse,
  "message"
> {
  catalogItems: ICatalogItem[];
}

export type ICatalogItemUpdateResponse = IMessageResponse;