import z from "zod";

export namespace HeroSettingSchema {
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
      buttonText: z
        .string({ error: "El buton-text debe ser una cadena de texto" })
        .min(3, "El button-text debe tener al menos tres caracteres")
        .optional(),
    }),
  });
}
