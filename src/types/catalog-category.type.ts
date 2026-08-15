import z from "zod";
import { CatalogCategory } from "../models";
import { IMessageResponse, MessageResponse } from "./custom";
import { CatalogCategorySchema } from "../schemas";

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

export namespace CatalogCategoryType {
  export type UpdateParams = z.infer<
    typeof CatalogCategorySchema.update
  >["params"];

  export type UpdateBody = z.infer<typeof CatalogCategorySchema.update>["body"];

  export type CreateBody = z.infer<typeof CatalogCategorySchema.create>["body"];

  export type GetParams = z.infer<
    typeof CatalogCategorySchema.getById
  >["params"];

  export type DeleteParams = GetParams;

  export type Response = CatalogCategory;

  export type GetResponse = Omit<MessageResponse, "message"> & {
    catalogCategory: Response;
  };

  export type GetAllResponse = Omit<MessageResponse, "message"> & {
    catalogCategories: Response[];
  };

  export type UpdateResponse = MessageResponse;

  export type CreateResponse = MessageResponse;

  export type DeleteResponse = MessageResponse
}
