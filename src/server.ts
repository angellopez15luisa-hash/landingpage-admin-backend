import express from "express";
import { Request, Response, NextFunction } from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import fs from "fs";
import { corsConfig } from "./config";
import navbarRoutes from "./routes/navbar.route";
import { CustomError } from "./types/custom";

dotenv.config();

const app = express();

app.use(cors(corsConfig));

app.use(morgan("dev"));

app.use(express.json());

app.use("/api/navbars", navbarRoutes);


app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).send("¡Ruta no encontrada!");
});

app.use((err: CustomError, req: Request, res: Response, next: NextFunction) => {
  if (req.file && req.file.path) {
    fs.unlink((req as any).file.path, (unlinkErr) => {
      if (unlinkErr)
        console.error("Error borrando archivo huérfano:", unlinkErr);
    });
  }

  const status = err.status || 500;
  const message = err.message || "Error interno del servidor";

  console.error(colors.red.bold(`[Error del servidor]: ${message}`));

  res.status(status).json({
    // error: true,
    success: false,
    status,
    message,
    stack: process.env.NODE_ENV === "development" ? err.stack : undefined,
  });
});

export default app;
