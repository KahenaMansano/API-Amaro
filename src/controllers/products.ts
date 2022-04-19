import { Request, Response } from 'express'
// import { ProductsDatabase } from '../data/ProductsDatabase'
import knex from '../knex'

export async function insertProduct(req: Request, res: Response) {
  try {
    await knex('products_api_amaro').insert(req.body)
    res.status(201).json({ success: true })
  } catch (error: any) {
    res.status(500).send(error.message)
  }
}

// domain.com/products/123
// domain.com/products?name=aeqwe&car=23

export async function searchProduct(req: Request, res: Response) {
  try {
    let query: any = {}

    Object.keys(req.query).forEach(key => {
      const val = req.query[key]
      if (val) query[key] = val
    })

    const results = await knex('products_api_amaro').where(query)
    res.status(201).json(results)
  } catch (error: any) {
    res.status(500).send(error.message)
  }
}

// export async function createList(req: Request, res: Response) {
//   try {
//     const list: Array<{
//       id: string
//       name: string
//       value: number
//       description: string
//       type: string
//     }> = req.body

//     if (list.length <= 0) {
//       res
//         .status(422)
//         .send(
//           'Essa lista está vazia. Insira produtos válidos com id, nome, valor, descrição e tipo.'
//         )
//     }

//     const productsDatabase = new ProductsDatabase()
//     // const productExemple = list[0]
//     // const productExist = await productsDatabase.findProduct(productExemple.id)

//     // if (productExist) {
//     //   res.status(409).send('Essa lista possui itens repetidos.')
//     // }

//     await productsDatabase.insertList(req.body)
//     res.status(200).send({ message: 'Lista inserida com sucesso!' })
//   } catch (error: any) {
//     res.status(400).send(error.message)
//   }
// }
