import express from "express";
import { Request, Response, NextFunction } from "express";
import Colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import fs from "fs";
import { corsConfig } from "./config";
import navbarRoutes from "./routes/navbar.route";

dotenv.config();

const app = express();

app.use(cors(corsConfig));

app.use(morgan("dev"));

app.use(express.json());

app.use("/api/navbars", navbarRoutes);

export default app;
