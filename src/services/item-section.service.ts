import { ItemSection } from "../models";
import { ItemSectionType } from "../types";
import { CustomError } from "../types/custom";

export class ItemSectionService {
  static async getAll(): Promise<ItemSectionType.Response[]> {
    return await ItemSection.findAll();
  }

  static async getById(
    id: ItemSection["id"],
  ): Promise<ItemSectionType.Response> {
    const itemSection = await ItemSection.findByPk(id);
    if (!itemSection) throw new CustomError("item-section no existe", 404);
    return itemSection;
  }

  static async update(
    id: ItemSection["id"],
    data: ItemSectionType.UpdateBody,
  ): Promise<void> {
    const itemSection = await this.getById(id);
    await itemSection.update(data);
  }
}
