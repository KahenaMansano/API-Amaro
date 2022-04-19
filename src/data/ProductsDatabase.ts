import Product from '../models/Product'

import { BaseDatabase } from './BaseDatabase'

export class ProductsDatabase extends BaseDatabase {
  public async insertList(data: Product): Promise<void> {
    const dataProducts = data
    try {
      BaseDatabase.connection('products_api_amaro').insert(dataProducts)
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message)
    }
  }

  public async findProduct(id: string): Promise<Product> {
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
