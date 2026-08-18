import z from "zod";
import { User } from "../models";

export namespace UserSchema {
  export const user = z.object({
    id: z.number().optional(),
    name: z.string().optional(),
    email: z.string().optional(),
    password: z.string().optional(),
    role: z.string().optional(),
    isActive: z.boolean().optional(),
    resetPasswordToken: z.string().optional(),
    resetPasswordExpires: z.date().optional(),
  });

  export const signIn = z.object({
    body: z.object({
      email: z
        .string({
          message: "El correo electrónico debe ser una cadena de texto",
        })
        .email("Ingresa un correo electrónico válido"),
      password: z
        .string({ message: "La contraseña debe ser una cadena de texto" })
        .min(6, "La contraseña debe tener al menos 6 caracteres"),
    }),
  });

  export const updatePassword = z.object({
    body: z.object({
      currentPassword: z
        .string({
          message: "La contraseña actual es obligatoria",
        })
        .min(6, "La contraseña actual debe tener al menos 8 caracteres"),
      newPassword: z
        .string({
          message: "La nueva contraseña es obligatoria",
        })
        .min(6, "La contraseña actual debe tener al menos 8 caracteres"),
    }),
  });

  export const forgotPassword = z.object({
    body: z.object({
      email: z
        .string({
          message: "El correo electronico debe ser una cadena de texto",
        })
        .min(1, "El correo electronico es obligatorio")
        .email({ message: "Ingresa un correo electronico valido" }),
    }),
  });

  export const verifyResetTokenSchema = z.object({
    params: z.object({
      token: z.string().min(1, "El token es obligatorio"),
    }),
  });

  export const resetPasswordSchema = z.object({
    params: z.object({
      token: z.string().min(1, "El token es obligatorio"),
    }),
    body: z.object({
      newPassword: z
        .string()
        .min(1, "La nueva contraseña es obligatoria")
        .min(8, "La contraseña debe tener al menos 8 caracteres"),
    }),
  });
}
