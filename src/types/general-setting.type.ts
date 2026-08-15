import z from "zod";
import { GeneralSettingSchema } from "../schemas";
import { GeneralSetting } from "../models";
import { MessageResponse } from "./custom";

export namespace GeneralSettingType {
  export type UpdateParams = z.infer<
    typeof GeneralSettingSchema.update
  >["params"];

  export type UpdateBody = z.infer<typeof GeneralSettingSchema.update>["body"];

  export type Response = GeneralSetting;

  export type GetResponse = Omit<MessageResponse, "message"> & {
    generalSetting: Response;
  };

  export type UpdateResponse = MessageResponse;
}
