import { Request, Response } from 'express'
import { ProductsDatabase } from '../data/ProductsDatabase'

export async function createList(req: Request, res: Response) {
  try {
    const list: Array<{
      id: string
      name: string
      value: number
      description: string
      type: string
    }> = req.body

    if (list.length <= 0) {
      res
        .status(422)
        .send(
          'Essa lista está vazia. Insira produtos válidos com id, nome, valor, descrição e tipo.'
        )
    }

    const productsDatabase = new ProductsDatabase()
    const productExemple = list[0]
    const productExist = await productsDatabase.findProductByID(
      productExemple.id
    )

    if (productExist) {
      res.status(409).send('Essa lista já foi cadastrada!')
    }

    await productsDatabase.insertList(req.body)

    res.status(200).send({ message: 'Lista criada com sucesso!' })
  } catch (error: any) {
    res.status(400).send(error.message)
  }
}
