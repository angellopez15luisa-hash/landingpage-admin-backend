import { HeroSection, ItemSection, Navbar, OrderStep } from "../models";

declare global {
  namespace Express {
    interface Locals {
      navbar: Navbar; // Extiende las propiedades globales de res.locals
      itemSection: ItemSection;
      heroSection: HeroSection;
      orderStep: OrderStep;
    }
  }
}
