import { CatalogCategory } from "../models";
import { IMessageResponse } from "./custom";

export type ICatalogCategory = Pick<CatalogCategory, "id" | "text">;

export type ICatalogCategoryCreateBody = Omit<ICatalogCategory, "id">;

export type ICatalogCategoryUpdateBody = Omit<ICatalogCategory, "id">;

export type ICatalogCategoryUpdateParams = Pick<ICatalogCategory, "id">;

export interface ICatalogCategoryGetAllResponse extends Omit<
  IMessageResponse,
  "message"
> {
  catalogCategories: ICatalogCategory[];
}

export type ICatalogCategoryUpdateResponse = IMessageResponse;
