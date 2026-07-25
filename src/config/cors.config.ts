import { CorsOptions } from "cors";
import dotenv from "dotenv";

dotenv.config();

export const corsConfig: CorsOptions = {
  origin: (origin, callback) => {
    const whiteList: Array<string> = [
      process.env.FRONTEND_URL_4173,
      process.env.FRONTEND_URL_5174,
      process.env.FRONTEND_URL_5175,
      process.env.FRONTEND_URL,
      undefined,
    ];
    if (whiteList.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Error de CORS"));
    }
  },
};
