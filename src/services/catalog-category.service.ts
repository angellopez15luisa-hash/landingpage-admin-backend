import { Transaction } from "sequelize";
import { sequelize } from "../config";
import { CatalogCategory } from "../models";
import { CatalogCategoryType } from "../types";
import { CustomError } from "../types/custom";

export class CatalogCategoryService {
  static async getAll(): Promise<CatalogCategoryType.Response[]> {
    return await CatalogCategory.findAll();
  }
  static async getById(
    id: CatalogCategory["id"],
  ): Promise<CatalogCategoryType.Response> {
    const catalogCategory = await CatalogCategory.findByPk(id);
    if (!catalogCategory)
      throw new CustomError("catalog-category no existe", 404);
    return catalogCategory;
  }

  static create = async (
    data: CatalogCategoryType.CreateBody,
  ): Promise<void> => {
    await CatalogCategory.create(data);
  };

  static async update(
    id: CatalogCategory["id"],
    data: CatalogCategoryType.UpdateBody,
  ): Promise<void> {
    await sequelize.transaction(async (t: Transaction) => {
      const catalogCategory = await this.getById(id);
      if (data.isDefault) {
        await CatalogCategory.update(
          {
            isDefault: false,
          },
          {
            where: {},
            transaction: t,
          },
        );

        await CatalogCategory.update(
          {
            isDefault: true,
          },
          {
            where: { id },
            transaction: t,
          },
        );
      }
      const { isDefault, ...newData } = data;
      await catalogCategory.update(newData, { transaction: t });
    });
  }

  static delete = async (id: CatalogCategory["id"]): Promise<void> => {
    const catalogCategory = await this.getById(id);
    await catalogCategory.destroy();
  };
}
