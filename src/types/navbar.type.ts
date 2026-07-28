import { z } from "zod";
import { NavbarSchema } from "../schemas";

export namespace NavbarType {
  export type CreateInput = z.infer<
    typeof NavbarSchema.createInputSchema
  >["body"];

  export type UpdateInput = z.infer<
    typeof NavbarSchema.updateInputSchema
  >["body"];

  export type UpdateParams = z.infer<typeof NavbarSchema.updateParamsSchema>;

  export type GetResponse = z.infer<typeof NavbarSchema.getResponseSchema>;

  export type UpdateResponse = z.infer<
    typeof NavbarSchema.updateResponseSchema
  >;
}
