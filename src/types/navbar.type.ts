import { z } from "zod";
import {
  createNavbarSchema,
  updateNavbarSchema,
} from "../schemas/navbar.schema";

export type CreateNavbarInput = z.infer<typeof createNavbarSchema>["body"];

export type UpdateNavbarInput = z.infer<typeof updateNavbarSchema>["body"];
