import { UserType } from "../types";
import jwt from "jsonwebtoken";
import 'dotenv/config'

export class JWTHelper {
  static generate = (data: UserType.GenerateJWT) => {
      const token = jwt.sign(data, process.env.JWT_SECRET, {
        expiresIn:'2h'
      })
      return token
  };
}
