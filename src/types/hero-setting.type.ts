import z from "zod";
import { HeroSettingSchema } from "../schemas";
import { HeroSetting } from "../models";
import { MessageResponse } from "./custom";

export namespace HeroSettingType {
  export type UpdateParams = z.infer<typeof HeroSettingSchema.update>["params"];

  export type UpdateBody = z.infer<typeof HeroSettingSchema.update>["body"];

  export type Response = HeroSetting;

  export type GetResponse = Omit<MessageResponse, "message"> & {
    heroSetting: Response;
  };

  export type UpdateResponse = MessageResponse;
}
