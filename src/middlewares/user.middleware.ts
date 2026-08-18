import { NextFunction, Request, Response } from "express";
import { CustomError } from "../types/custom";
import jwt from "jsonwebtoken";
import "dotenv/config";
import { User } from "../models";
import { UserType } from "../types";

export class UserMiddleware {
  static verifyToken = async (
    req: Request,
    res: Response<void>,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const bearer = req.get("authorization") || req.headers.authorization;
      if (!bearer || !bearer.startsWith("Bearer "))
        throw new CustomError("No autorizado", 404);

      const token = bearer.split(" ")[1];
      const decoded = jwt.verify(
        token,
        process.env.JWT_SECRET as string ,
      ) as UserType.DecodedToken;
      const user = await User.findByPk(decoded.id, {
        attributes: { exclude: ["password",'resetPasswordToken','resetPasswordExpires'] },
      });
      if (!user)
        throw new CustomError(
          "El usuario asociado a este token ya no existe",
          404,
        );
      req.user = user;
      next();
    } catch (error) {
      // 1. Si ya es un CustomError tuyo (como "No autorizado" o usuario no encontrado), déjalo pasar
      if (error instanceof CustomError) {
        return next(error);
      }

      // 2. Distinguir si el token expiró específicamente
      if (error instanceof jwt.TokenExpiredError) {
        return next(
          new CustomError(
            "El token ha expirado, por favor inicia sesión nuevamente",
            401,
          ),
        );
      }

      // 3. Si el token es inválido, manipulado o corrupto
      if (error instanceof jwt.JsonWebTokenError) {
        return next(new CustomError("Token no válido", 401));
      }

      // 4. Por cualquier otro error inesperado del servidor
      next(error);
    }
  };
}

// next(error);
