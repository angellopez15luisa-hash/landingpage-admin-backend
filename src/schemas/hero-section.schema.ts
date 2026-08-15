import z from "zod";

export namespace HeroSectionSchema {
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
            message: "El ID debe ser mayor a cero",
          });
          return z.NEVER;
        }
        return val;
      }),
    }),
    body: z.object({
      imagePath: z.string().optional(),
      tag: z
        .string({ error: "El tag debe ser una cadena de texto"})
        .min(3, "El tag debe tener al menos tres caracteres")
        .optional(),
      title: z
        .string({ error: "El title debe ser una cadena de texto" })
        .min(3, "El title debe tener al menos tres caracteres")
        .optional(),
      highlightText: z
        .string({ error: "El highlightText debe ser una cadena de texto" })
        .min(3, "El highlightText debe tener al menos tres caracteres")
        .optional(),
      description: z
        .string({ error: "La description debe ser una cadena de texto" })
        .min(3, "La description debe tener al menos tres caracteres")
        .optional(),
    }),
  });
}
