import { CatalogCategory, CatalogItem } from "../models";
import { CatalogItemType } from "../types";
import { CustomError } from "../types/custom";
import { CatalogCategoryService } from "./catalog-category.service";

export class CatalogItemService {
  static async getAll(): Promise<CatalogItemType.Response[]> {
    return await CatalogItem.findAll({
      include: [
        {
          model: CatalogCategory,
          as: "catalogCategory",
        },
      ],
    });
  }

  static async getById(
    id: CatalogItem["id"],
  ): Promise<CatalogItemType.Response> {
    const catalogItem = await CatalogItem.findByPk(id);
    if (!catalogItem) throw new CustomError("catalog-item no existe", 404);
    return catalogItem;
  }

  static create = async (data: CatalogItemType.CreateBody): Promise<void> => {
    await CatalogCategoryService.getById(data.catalogCategoryId)
    await CatalogItem.create(data);
  };

  static async update(
    id: CatalogItem["id"],
    data: CatalogItemType.UpdateBody,
  ): Promise<void> {
    const catalogItem = await this.getById(id);
    await catalogItem.update(data);
  }

  static delete = async (id: CatalogItem["id"]): Promise<void> => {
    const catalogItem = await this.getById(id);
    await catalogItem.destroy();
  };
}
