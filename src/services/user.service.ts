import { Op } from "sequelize";
import { sendPasswordResetEmail } from "../helpers/email.helper";
import { JWTHelper } from "../helpers/jwt.helper";
import { UserHelper } from "../helpers/user.helper";
import { User } from "../models";
import { UserType } from "../types";
import { CustomError } from "../types/custom";
import crypto from "crypto";
import 'dotenv/config'

export class UserService {
  static signIn = async (data: UserType.SignInBody): Promise<string> => {
    const { email, password } = data;
    const user = await User.findOne({
      where: { email },
    });
    if (!user) throw new CustomError("Email no existe", 404);
    const isPasswordCorrect = await UserHelper.checkPassword(
      password,
      user.password,
    );
    if (!isPasswordCorrect) throw new CustomError("Password incorrecto", 404);
    const token = JWTHelper.generate({ id: user.id });
    return token;
  };

  static updatePassword = async (
    id: UserType.User["id"],
    data: UserType.UpdatePasswordBody,
  ): Promise<string> => {
    const { currentPassword, newPassword } = data;

    const user = await User.findByPk(id);
    if (!user) throw new CustomError("Usuario no encontrado", 404);

    const isPasswordCorrect = await UserHelper.checkPassword(
      currentPassword,
      user.password,
    );
    if (!isPasswordCorrect)
      throw new CustomError("La contraseña actual es incorrecta", 400);

    const hashedNewPassword = await UserHelper.hash(newPassword);
    user.password = hashedNewPassword;
    await user.save();
    return "Contraseña actualizada correctamente";
  };

  static forgotPassword = async (
    email: UserType.User["email"],
  ): Promise<string> => {
    const user = await User.findOne({ where: { email } });
    console.log("1")
    if (!user) {
      throw new CustomError(
        "No existe una cuenta registrada con este correo",
        404,
      );
    }
    console.log("2")

    // 1. Generamos el token y la expiración
    const resetToken = crypto.randomBytes(32).toString("hex");
    const resetTokenExpires = new Date(Date.now() + 3600000); // 1 hora

    // 2. Guardamos en la base de datos
    user.resetPasswordToken = resetToken;
    user.resetPasswordExpires = resetTokenExpires;
    await user.save();
    console.log("3")
    // 3. Construimos el enlace hacia el frontend
    // Nota: Asegúrate de que esta URL sea la correcta de tu frontend
    const frontendUrl = process.env.FRONTEND_URL_PUBLIC;
    const resetUrl = `${frontendUrl}/auth/reset-password?token=${resetToken}`;
    console.log(resetUrl)
    console.log("4")

    // 4. Enviamos el correo usando el helper
    sendPasswordResetEmail(user.email, resetUrl);
    console.log("5")

    return "Se ha enviado un enlace de recuperación a tu correo";
  };

  static verifyToken = async (token: string): Promise<User> => {
    const user = await User.findOne({
      where: {
        resetPasswordToken: token,
        resetPasswordExpires: {
          [Op.gt]: new Date(),
        },
      },
    });
    if (!user)
      throw new Error("El enlace de recuperación es inválido o ha expirado.");
    return user;
  };

  static resetPassword = async (
    token: UserType.ResetPasswordParams["token"],
    data: UserType.ResetPasswordBody,
  ): Promise<string> => {
    const { newPassword } = data;
    const user = await this.verifyToken(token);
    user.password = await UserHelper.hash(newPassword);

    user.resetPasswordToken = null;
    user.resetPasswordExpires = null;

    await user.save();

    return "Tu contraseña se ha restablecido correctamente.";
  };
}
