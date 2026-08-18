import {
  CatalogCategory,
  CatalogItem,
  FaqItemQuestion,
  FooterSection,
  HeroSection,
  ItemSection,
  Navbar,
  OrderStep,
  ReviewOpinion,
  SocialLink,
  // User,
} from "../models";
import { UserType } from "./user.type";

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
      socialLink: SocialLink;
      footerSection: FooterSection;
    }
    interface Request {
      user?:Pick<UserType.User,'id'|'email'|'role'>
      // user?: {
      //   id: UserType.User['id'],
      //   email: UserType.User['email'],
      //   role:UserType.User['role']
      // }
    }
  }
}
