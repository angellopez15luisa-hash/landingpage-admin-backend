import z from "zod";
import { CatalogItem } from "../models";
import { IMessageResponse, MessageResponse } from "./custom";
import { CatalogItemSchema } from "../schemas";

export type ICatalogItem = Pick<
  CatalogItem,
  "id" | "title" | "catalogCategoryId" | "price" | "imagePath" | "badge"
>;

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

export namespace CatalogItemType {
  export type UpdateParams = z.infer<typeof CatalogItemSchema.update>["params"];

  export type UpdateBody = z.infer<typeof CatalogItemSchema.update>["body"];

  export type CreateBody = z.infer<typeof CatalogItemSchema.create>["body"];

  export type GetParams = UpdateParams;

  export type DeleteParams = UpdateParams;

  export type Response = CatalogItem;

  export type GetResponse = Omit<MessageResponse, "message"> & {
    catalogItem: Response;
  };

  export type GetAllResponse = Omit<MessageResponse, "message"> & {
    catalogItems: Response[];
  };

  export type UpdateResponse = MessageResponse;

  export type DeleteResponse = MessageResponse;

  export type CreateResponse = MessageResponse;
}
