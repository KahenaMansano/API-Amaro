import { Product } from '../types/Product'
import { BaseDatabase } from './BaseDatabase'

export class ProductDatabase extends BaseDatabase {
  public async createList(product: Product) {
    try {
      await BaseDatabase.connection('produts_amaro').insert({
        id: product.getId(),
        name: product.getName(),
        value: product.getValue(),
        description: product.getDescription(),
        type: product.getType()
      })
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message)
    }
  }

  public async findProductByID(id: string): Promise<Product> {
    try {
      const product = await BaseDatabase.connection('produts_amaro')
        .select('*')
        .where({ id })

      return product[0]
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message)
    }
  }
}
