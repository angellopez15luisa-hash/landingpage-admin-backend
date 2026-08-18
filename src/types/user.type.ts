import z from "zod";
import { UserSchema } from "../schemas";
import { MessageResponse } from "./custom";
import jwt from "jsonwebtoken";

export namespace UserType {
  export type User = z.infer<typeof UserSchema.user>;

  export type SignInBody = z.infer<typeof UserSchema.signIn>["body"];

  export type UpdatePasswordBody = z.infer<
    typeof UserSchema.updatePassword
  >["body"];

  export type ForgotPasswordBody = z.infer<
    typeof UserSchema.forgotPassword
  >["body"];

  export type SignInResponse = Omit<MessageResponse, "message"> & {
    token: string;
  };

  export type GenerateJWT = {
    id: User["id"];
  };

  export type DecodedToken = jwt.JwtPayload & {
    id: number;
  };

  export type VerifyTokenParams = z.infer<
    typeof UserSchema.verifyResetTokenSchema
  >["params"];

  export type ResetPasswordParams = z.infer<
    typeof UserSchema.resetPasswordSchema
  >["params"];

  export type ResetPasswordBody = z.infer<
    typeof UserSchema.resetPasswordSchema
  >["body"];

  export type GetProfileResponse = Omit<MessageResponse, "message"> & {
    user: Omit<User, "password">;
  };

  export type UpdatePasswordResponse = MessageResponse;

  export type ForgotPasswordResponse = MessageResponse;

  export type VerifyTokenResponse = MessageResponse;

  export type ResetPasswordResponse = MessageResponse;
}
