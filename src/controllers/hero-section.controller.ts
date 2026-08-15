import { NextFunction, Request, Response } from "express";
import { HeroSection } from "../models";
import { HeroSectionType } from "../types";
import { HeroSectionService } from "../services";
import { v2 as cloudinary } from "cloudinary";

export class HeroSectionController {
  static DEFAULT_IMAGE_URL = process.env.DEFAULT_IMAGE_URL;

  static getAll = async (
    req: Request,
    res: Response<HeroSectionType.GetAllResponse>,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const heroSections = await HeroSectionService.getAll();
      res.status(200).json({
        success: true,
        heroSections,
      });
    } catch (error) {
      next(error);
    }
  };

  static getById = async (
    req: Request<HeroSectionType.GetParams>,
    res: Response<HeroSectionType.GetResponse>,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const heroSection = await HeroSectionService.getById(
        Number(req.params.id),
      );
      res.status(200).json({
        heroSection,
        success: true,
      });
    } catch (error) {
      next(error);
    }
  };

  static update = async (
    req: Request<HeroSectionType.UpdateParams, {}, HeroSectionType.UpdateBody>,
    res: Response<HeroSectionType.UpdateResponse>,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const id = Number(req.params.id);
      const updateData: HeroSectionType.UpdateBody = { ...req.body };

      // 1. Obtenemos el registro actual ANTES de actualizar para conocer su imagen vieja
      const currentItem = await HeroSectionService.getById(id);
      // 2. Si el usuario subió un archivo nuevo
      if (req.file) {
        updateData.imagePath = req.file.path; // o req.file.secure_url según tu multer
      }

      await HeroSectionService.update(id, updateData);

      // 4. Si se actualizó con un archivo nuevo y el registro tenía una imagen anterior, la borramos de Cloudinary
      if (req.file && currentItem && currentItem.imagePath) {
        try {
          const parts = currentItem.imagePath.split("/");
          const filenameWithExt = parts[parts.length - 1];
          const folder = parts[parts.length - 2];
          const publicId = `${folder}/${filenameWithExt.split(".")[0]}`;

          const result = await cloudinary.uploader.destroy(publicId);
          console.log(
            `Cloudinary cleanup result for HeroSection ${publicId}:`,
            result,
          );
        } catch (cloudinaryError) {
          console.error(
            "Error al eliminar imagen vieja de Cloudinary en HeroSection:",
            cloudinaryError,
          );
        }
      }

      res.status(201).json({
        message: "hero-section actualizado satisfactoriamente",
        success: true,
      });
    } catch (error) {
      next(error);
    }
  };
}
