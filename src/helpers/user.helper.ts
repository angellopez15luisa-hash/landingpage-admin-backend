import { User } from "../models";
import bcrypt from "bcrypt";
import { UserType } from "../types";

export class UserHelper {
  static checkPassword = async (
    inputPassword: User["password"],
    dbPassword: User["password"],
  ) => {
    return await bcrypt.compare(inputPassword, dbPassword);
  };

  static hash = async (
    password: UserType.User["password"],
  ): Promise<string> => {
    const saltRounds = 10;
    return await bcrypt.hash(password, saltRounds);
  };
}
