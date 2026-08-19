import dotenv from "dotenv";
dotenv.config();

export const ENV = {
  SERVER: {
    PORT: process.env.PORT || 3000,
  },
  DB: {
    HOST: process.env.DB_HOST,
    USER: process.env.DB_USER,
    PASSWORD: process.env.DB_PASSWORD,
    NAME: process.env.DB_NAME,
  },
  MAILTRAP: {
    HOST: process.env.MAILTRAP_HOST,
    PORT: Number(process.env.MAILTRAP_PORT) || 587,
    USER: process.env.MAILTRAP_USER,
    PASS: process.env.MAILTRAP_PASS,
  },
  JWT: {
    SECRET: process.env.JWT_SECRET || "supersecretkey",
    EXPIRES_IN: "1h",
  },
  RESEND: {
    RESEND_API_KEY:process.env.RESEND_API_KEY
  }
};
