import z from "zod";

export namespace CatalogItemSchema {
  export const getById = z.object({
    params: z.object({
      id: z.string().transform((val, ctx) => {
        const parsed = Number(val);
        if (isNaN(parsed)) {
          ctx.addIssue({
            code: "custom",
            message: "El ID debe ser un numero valido",
          });
          return z.NEVER;
        }
        if (parsed <= 0) {
          ctx.addIssue({
            code: "custom",
            message: "El ID debe ser mayor a cero",
          });
          return z.NEVER;
        }
        return val;
      }),
    }),
  });
  export const create = z.object({
    body: z.object({
      title: z
        .string({ error: "El title debe ser una cadena de texto" })
        .min(3, "El title debe tener al menos tres caracteres")
        .optional(),
      catalogCategoryId: z.coerce
        .number({
          error: "El catalogCategoryId debe ser un numero",
        })
        .int("El catalogCategoryId debe ser un numero entero")
        .positive("El catalogCategoryId debe ser mayor a cero")
        .optional(),
      price: z.coerce
        .number({ error: "El price debe ser un valor numerico" })
        .positive("El price debe ser mayor a cero")
        .optional(),
      imagePath: z.string().optional(),
      badge: z
        .string({ error: "El badge debe ser una cadena de texto" })
        .min(3, "El badge debe tener al menos tres caracteres ")
        .optional(),
    }),
  });
  export const update = z.object({
    params: z.object({
      id: z.string().transform((val, ctx) => {
        const parsed = Number(val);
        if (isNaN(parsed)) {
          ctx.addIssue({
            code: "custom",
            message: "El ID debe ser un numero valido",
          });
          return z.NEVER;
        }
        if (parsed <= 0) {
          ctx.addIssue({
            code: "custom",
            message: "El ID debe ser mayor cero",
          });
          return z.NEVER;
        }
        return val;
      }),
    }),
    body: z.object({
      title: z
        .string({ error: "El title debe ser una cadena de texto" })
        .min(3, "El title debe tener al menos tres caracteres")
        .optional(),
      catalogCategoryId: z.coerce
        .number({
          error: "El catalogCategoryId debe ser un numero",
        })
        .int("El catalogCategoryId debe ser un numero entero")
        .positive("El catalogCategoryId debe ser mayor a cero")
        .optional(),
      price: z.coerce
        .number({ error: "El price debe ser un valor numerico" })
        .positive("El price debe ser mayor a cero")
        .optional(),
      badge: z
        .string({ error: "El badge debe ser una cadena de texto" })
        .min(3, "El badge debe tener al menos tres caracteres ")
        .optional(),
      isActive: z
        .preprocess((val) => {
          if (val === "true") return true;
          if (val === "false") return false;
          return val;
        }, z.boolean())
        .optional(),
      removeImage: z.preprocess((val) => {
        if (val === "true") return true;
        if (val === "false") return false;
        return val;
      }, z.boolean().optional()),
      imagePath: z.string().optional(),
    }),
  });
}
