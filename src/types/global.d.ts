import {
  CatalogCategory,
  CatalogItem,
  FaqItemQuestion,
  HeroSection,
  ItemSection,
  Navbar,
  OrderStep,
  ReviewOpinion,
  SocialLink,
} from "../models";

declare global {
  namespace Express {
    interface Locals {
      navbar: Navbar; // Extiende las propiedades globales de res.locals
      itemSection: ItemSection;
      heroSection: HeroSection;
      orderStep: OrderStep;
      catalogCategory: CatalogCategory;
      catalogItem: CatalogItem;
      reviewOpinion: ReviewOpinion;
      faqItemQuestion: FaqItemQuestion;
      socialLink:SocialLink
    }
  }
}
