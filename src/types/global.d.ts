import { Navbar } from "../models";

declare global {
  namespace Express {
    interface Locals {
      navbar: Navbar; // Extiende las propiedades globales de res.locals
    }
  }
}