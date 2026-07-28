import { z } from "zod";
import { NavbarSchema } from "../schemas";

export namespace NavbarType {
  export type CreateInput = z.infer<
    typeof NavbarSchema.createInputSchema
  >["body"];

  export type UpdateInput = z.infer<
    typeof NavbarSchema.updateInputSchema
  >["body"];

  export type GetResponse = z.infer<typeof NavbarSchema.getResponseSchema>;
}
