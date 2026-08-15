import z from "zod";

export namespace GeneralSettingSchema {
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
      textNameCompany: z
        .string({ error: "El text-name-company debe ser una cadena de texto" })
        .min(3, {
          message: "El text-name-company debe tener al menos tres caracteres",
        })
        .optional(),
      textButtonNavbar: z
        .string({ error: "El text-button-navbar debe ser una cadena de texto" })
        .min(3, {
          message: "El text-button-navbar debe tener al menos tres caracteres",
        })
        .optional(),
      textButtonHeroSection: z
        .string({
          error: "El text-button-hero-section debe ser una cadena de texto",
        })
        .min(3, {
          message:
            "El text-button-hero-section debe tener al menos tres caracteres",
        })
        .optional(),
      textTitleOrderStep: z
        .string({
          error: "El text-title-order-step debe ser una cadena de texto",
        })
        .min(3, {
          message:
            "El text-title-order-step debe tener al menos tres caracteres",
        })
        .optional(),
      textSubtitleOrderStep: z
        .string({
          error: "El text-subtitle-order-step debe ser una cadena de texto",
        })
        .min(3, {
          message:
            "El text-subtitle-order-step debe tener al menos tres caracteres",
        })
        .optional(),
      textTitleCatalogItem: z
        .string({
          error: "El text-title-catalog-item debe ser una cadena de texto",
        })
        .min(3, {
          message:
            "El text-title-catalog-item debe tener al menos tres caracteres",
        })
        .optional(),
      textSubtitleCatalogItem: z
        .string({
          error: "El text-subtitle-catalog-item debe ser una cadena de texto",
        })
        .min(3, {
          message:
            "El text-subtitle-catalog-item debe tener al menos tres caracteres",
        })
        .optional(),
      textTitleReviewOpinion: z
        .string({
          error: "El text-title-review-opinion debe ser una cadena de texto",
        })
        .min(3, {
          message:
            "El text-title-review-opinion debe tener al menos tres caracteres",
        })
        .optional(),
      textSubtitleReviewOpinion: z
        .string({
          error: "El text-subtitle-review-opinion debe ser una cadena de texto",
        })
        .min(3, {
          message:
            "El text-subtitle-review-opinion debe tener al menos tres caracteres",
        })
        .optional(),
      textTitleFaqItemQuestion: z
        .string({
          error: "El text-title-faq-item-question debe ser una cadena de texto",
        })
        .min(3, {
          message:
            "El text-title-faq-item-question debe tener al menos tres caracteres",
        })
        .optional(),
      textSubtitleFaqItemQuestion: z
        .string({
          error:
            "El text-subtitle-faq-item-qestion debe ser una cadena de texto",
        })
        .min(3, {
          message:
            "El text-subtitle-faq-item-qestion debe tener al menos tres caracteres",
        })
        .optional(),
      textPhoneFooterSection: z
        .string({
          error: "El text-phone-footer-section debe ser una cadena de texto",
        })
        .min(3, {
          message:
            "El text-phone-footer-section debe tener al menos tres caracteres",
        })
        .optional(),
      textEmailFooterSection: z
        .string({
          error: "El text-email-footer-section debe ser una cadena de texto",
        })
        .min(3, {
          message:
            "El text-email-footer-section debe tener al menos tres caracteres",
        })
        .optional(),
      textAddressFooterSection: z
        .string({
          error: "El text-address-footer-section debe ser una cadena de texto",
        })
        .min(3, {
          message:
            "El text-address-footer-section debe tener al menos tres caracteres",
        })
        .optional(),
      textBusinessHoursFooterSection: z
        .string({
          error:
            "El text-business-hours-footer-section debe ser una cadena de texto",
        })
        .min(3, {
          message:
            "El text-business-hours-footer-section debe tener al menos tres caracteres",
        })
        .optional(),
    }),
  });
}
