import express from "express";
import { Request, Response, NextFunction } from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import fs from "fs";
import { corsConfig } from "./config";
import { CustomError } from "./types/custom";
import navbarRoutes from "./routes/navbar.route";
import itemSectionRoutes from "./routes/item-section.route";
import heroSectionRoutes from "./routes/hero-section.route";
import heroSettingRoutes from "./routes/hero-setting.route";
import orderStepRoutes from "./routes/order-step.route";
import catalogCategoryRoutes from "./routes/catalog-category.route";
import catalogItemRoutes from "./routes/catalog-item.route";
import reviewOpinionRoutes from "./routes/review-opinion.route";
import faqItemQuestionRoutes from "./routes/faq-item-question.route";
import socialLinkRoutes from "./routes/social-link.route";
import footerSectionRoutes from "./routes/footer-section.route";
import generalSettingRoutes from "./routes/general-setting.route";
import userRoutes from './routes/user.route'

dotenv.config();

const app = express();

app.use(cors(corsConfig));

app.use(morgan("dev"));

app.use(express.json());

app.use("/api/navbars", navbarRoutes);
app.use("/api/item-sections", itemSectionRoutes);
app.use("/api/hero-sections", heroSectionRoutes);
app.use("/api/hero-settings", heroSettingRoutes);
app.use("/api/order-steps", orderStepRoutes);
app.use("/api/catalog-categories", catalogCategoryRoutes);
app.use("/api/catalog-items", catalogItemRoutes);
app.use("/api/review-opinions", reviewOpinionRoutes);
app.use("/api/faq-item-questions", faqItemQuestionRoutes);
app.use("/api/social-links", socialLinkRoutes);
app.use("/api/footer-sections", footerSectionRoutes);
app.use("/api/general-settings", generalSettingRoutes);
app.use('/api/users',userRoutes)

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
