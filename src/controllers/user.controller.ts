import { NextFunction, Request, Response } from "express";
import { UserType } from "../types";
import { UserService } from "../services";
import { MessageResponse } from "../types/custom";

export class UserController {
  static signIn = async (
    req: Request<{}, {}, UserType.SignInBody>,
    res: Response<UserType.SignInResponse>,
    next: NextFunction,
  ): Promise<void> => {
    const token = await UserService.signIn(req.body);
    res.status(200).json({
      success: true,
      token,
    });
  };

  static getProfile = async (
    req: Request,
    res: Response<UserType.GetProfileResponse>,
    next: NextFunction,
  ): Promise<void> => {
    const user = req.user;
    res.status(200).json({
      success: true,
      user,
    });
  };

  static updatePassword = async (
    req: Request<{}, {}, UserType.UpdatePasswordBody>,
    res: Response<UserType.UpdatePasswordResponse>,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const message = await UserService.updatePassword(req.user.id, req.body);
      res.status(200).json({
        message,
        success: true,
      });
    } catch (error) {
      next(error);
    }
  };

  static forgotPassword = async (
    req: Request<{}, {}, UserType.ForgotPasswordBody>,
    res: Response<UserType.ForgotPasswordResponse>,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const { email } = req.body;
      console.log(email)
      const message = await UserService.forgotPassword(email);
      res.status(200).json({
        success: true,
        message,
      });
    } catch (error) {
      next(error);
    }
  };

  static verifyToken = async (
    req: Request<UserType.VerifyTokenParams>,
    res: Response<MessageResponse>,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const { token } = req.params;
      await UserService.verifyToken(token);
      res.status(200).json({
        success: true,
        message: "Token valido",
      });
    } catch (error) {
      next(error);
    }
  };

  static resetPassword = async (
    req: Request<UserType.ResetPasswordParams, {}, UserType.ResetPasswordBody>,
    res: Response<MessageResponse>,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const message = await UserService.resetPassword(
        req.params.token,
        req.body,
      );
      res.status(200).json({
        success: true,
        message,
      });
    } catch (error) {
      next(error);
    }
  };
}
