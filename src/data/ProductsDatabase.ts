import { Data } from '../types/Product'
import knex, { Knex } from 'knex'
// import { BaseDatabase } from './BaseDatabase'

export class ProductsDatabase {
  public async insertList(data: Data): Promise<void> {
    const dataProducts = [{ data }]
    try {
      await knex('products_api_amaro').jsonInsert(dataProducts)
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
