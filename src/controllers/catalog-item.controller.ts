import { NextFunction, Request, Response } from "express";
import "dotenv/config";
import { v2 as cloudinary } from "cloudinary";
import {
  ICatalogItemUpdateBody,
  ICatalogItemUpdateParams,
  ICatalogItemUpdateResponse,
} from "../types/catalog-item.type";
import { CatalogItemType } from "../types";
import { CatalogItemService } from "../services";
import { Server } from "socket.io";

export class CatalogItemController {
  static DEFAULT_IMAGE_URL = process.env.DEFAULT_IMAGE_URL;

  static getAll = async (
    req: Request,
    res: Response<CatalogItemType.GetAllResponse>,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const catalogItems = await CatalogItemService.getAll();
      res.status(200).json({
        catalogItems,
        success: true,
      });
    } catch (error) {
      next(error);
    }
  };

  static get = async (
    req: Request<CatalogItemType.GetParams>,
    res: Response<CatalogItemType.GetResponse>,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const catalogItem = await CatalogItemService.getById(
        Number(req.params.id),
      );
      res.status(200).json({
        catalogItem,
        success: true,
      });
    } catch (error) {
      next(error);
    }
  };

  static create = async (
    req: Request<{}, {}, CatalogItemType.CreateBody>,
    res: Response<CatalogItemType.CreateResponse>,
    next: NextFunction,
  ): Promise<void> => {
    try {
      // const DEFAULT_IMAGE_URL =
      //   "https://res.cloudinary.com/mivh0wir/image/upload/v1786688403/landing-page/hamkxcbcp4abe0mdsho1.jpg";
      // const DEFAULT_IMAGE_URL = process.env.DEFAULT_IMAGE_URL;

      // 1. Obtenemos la URL que Cloudinary generó y guardó en req.file.path
      const imagePath = req.file ? req.file.path : this.DEFAULT_IMAGE_URL;
      // 2. Fusionamos los datos del body con la ruta de la imagen (si el usuario subió una)
      const payload = {
        ...req.body,
        imagePath,
      };

      // 3. Pasamos el payload completo al service
      await CatalogItemService.create(payload);

      const io = req.app.get("io") as Server | undefined;
      if (io) {
        io.emit("catalog-item", { action: "update" });
      }

      res.status(201).json({
        message: "catalog-tem creado satisfactoriamente",
        success: true,
      });
    } catch (error) {
      next(error);
    }
  };

  static update = async (
    req: Request<CatalogItemType.UpdateParams, any, CatalogItemType.UpdateBody>,
    res: Response<CatalogItemType.UpdateResponse>,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const id = Number(req.params.id);
      const updateData: CatalogItemType.UpdateBody = { ...req.body };

      // const defaultImageUrl =
      //   "https://res.cloudinary.com/mivh0wir/image/upload/v1786688403/landing-page/hamkxcbcp4abe0mdsho1.jpg";

      // 1. Obtenemos el producto actual ANTES de hacer cambios para saber cuál era su imagen vieja
      const currentItem = await CatalogItemService.getById(id);

      // 2. Preparamos la nueva ruta de la imagen según la acción del usuario
      if (req.file) {
        updateData.imagePath = req.file.path; // o req.file.secure_url
      } else if (req.body.removeImage) {
        updateData.imagePath = this.DEFAULT_IMAGE_URL;
      }

      // 3. PRIMERO ejecutamos la actualización en la base de datos (y servicios)
      await CatalogItemService.update(id, updateData);

      // 4. DESPUÉS de que se guardó con éxito, si subió una nueva imagen o la eliminó,
      // procedemos a borrar la imagen anterior de Cloudinary para evitar huérfanas
      if (
        (req.file || req.body.removeImage) &&
        currentItem &&
        currentItem.imagePath
      ) {
        if (currentItem.imagePath !== this.DEFAULT_IMAGE_URL) {
          try {
            const parts = currentItem.imagePath.split("/");
            const filenameWithExt = parts[parts.length - 1];
            const folder = parts[parts.length - 2];
            const publicId = `${folder}/${filenameWithExt.split(".")[0]}`;

            // Capturamos el resultado de la eliminación
            const result = await cloudinary.uploader.destroy(publicId);

            // Log para confirmar qué pasó
            console.log(`Cloudinary cleanup result for ${publicId}:`, result);
          } catch (cloudinaryError) {
            // Si falla Cloudinary aquí, la base de datos ya se actualizó correctamente,
            // solo lo registramos en consola para que no rompa la respuesta al cliente.
            console.error(
              "Error al limpiar imagen vieja de Cloudinary:",
              cloudinaryError,
            );
          }
        }
      }

      const io = req.app.get("io") as Server | undefined;
      if (io) {
        io.emit("catalog-item", { action: "update" });
      }

      res.status(200).json({
        message: "catalog-item actualizado satisfactoriamente",
        success: true,
      });
    } catch (error) {
      next(error);
    }
  };

  static delete = async (
    req: Request<CatalogItemType.DeleteParams>,
    res: Response<CatalogItemType.DeleteResponse>,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const id = Number(req.params.id);
      // const defaultImageUrl =
      //   "https://res.cloudinary.com/mivh0wir/image/upload/v1786688403/landing-page/hamkxcbcp4abe0mdsho1.jpg";

      // 1. Obtenemos el producto antes de borrarlo para conocer su imagePath
      const currentItem = await CatalogItemService.getById(id);

      // 2. Eliminamos el registro de la base de datos primero
      await CatalogItemService.delete(id);

      // 3. Si el producto tenía una imagen real (diferente a la por defecto), la borramos de Cloudinary
      if (
        currentItem &&
        currentItem.imagePath &&
        currentItem.imagePath !== this.DEFAULT_IMAGE_URL
      ) {
        try {
          const parts = currentItem.imagePath.split("/");
          const filenameWithExt = parts[parts.length - 1];
          const folder = parts[parts.length - 2];
          const publicId = `${folder}/${filenameWithExt.split(".")[0]}`;

          const result = await cloudinary.uploader.destroy(publicId);
          console.log(
            `Cloudinary cleanup result on delete for ${publicId}:`,
            result,
          );
        } catch (cloudinaryError) {
          console.error(
            "Error al eliminar imagen de Cloudinary en delete:",
            cloudinaryError,
          );
        }
      }

      const io = req.app.get("io") as Server | undefined;
      if (io) {
        io.emit("catalog-item", { action: "update" });
      }

      res.status(200).json({
        message: "catalog-item eliminado satisfactoriamente",
        success: true,
      });
    } catch (error) {
      next(error);
    }
  };
}
