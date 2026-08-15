import z from "zod";
import { ItemSection } from "../models";
import { IMessageResponse, MessageResponse } from "./custom";
import { ItemSectionSchema } from "../schemas";

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

export namespace ItemSectionType {
  export type UpdateParams = z.infer<typeof ItemSectionSchema.update>["params"];

  export type UpdateBody = z.infer<typeof ItemSectionSchema.update>["body"];

  export type GetParams = z.infer<typeof ItemSectionSchema.getById>['params'];

  export type Response = ItemSection;

  export type GetAllResponse = Omit<MessageResponse, "message"> & {
    itemSections: Response[];
  };

  export type GetResponse = Omit<MessageResponse, "message"> & {
    itemSection: Response;
  };

  export type UpdateResponse = MessageResponse;
}
