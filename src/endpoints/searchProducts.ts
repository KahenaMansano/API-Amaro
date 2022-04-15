import { Request, Response } from 'express'
import { ProductsDatabase } from '../data/ProductsDatabase'

export async function getProducts(req: Request, res: Response) {
  try {
    const { id, name, type } = req.body

    if (!id && !name && !type) {
      res
        .status(400)
        .send(
          'É preciso inserir ao menos um valor de referência para efetuar a busca do produto, seja id, nome ou tipo.'
        )
    }

    if ((id && name) || (id && type) || (name && type)) {
      res
        .status(400)
        .send(
          'Insira apenas um valor de referência para efetuar a busca do produto, seja id, nome ou tipo.'
        )
    }

    const productsDatabase = new ProductsDatabase()
    await productsDatabase.findProduct(req.body)
    res.status(200).send({ message: `Resultado da busca por ${req.body}:` })
  } catch (error: any) {
    throw new Error(error.sqlMessage || error.message)
  }
}
