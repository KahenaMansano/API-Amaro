import { Request, Response } from 'express'
import knex from '../knex'

export async function searchProducts(req: Request, res: Response) {
  try {
    let query: any = {}

    if (!query.id && !query.name && !query.type) {
      res
        .status(400)
        .send(
          'É preciso inserir ao menos um valor de referência para efetuar a busca do produto, seja id, nome ou tipo.'
        )
    }

    if (
      (query.id && query.name) ||
      (query.id && query.type) ||
      (query.name && query.type)
    ) {
      res
        .status(400)
        .send(
          'Insira apenas um valor de referência para efetuar a busca do produto, seja id, nome ou tipo.'
        )
    }

    Object.keys(req.query).forEach(key => {
      const val = req.query[key]
      if (val) query[key] = val
    })

    const results = await knex('products_api_amaro').where(`${query}`)
    res.status(201).send({ message: 'Produto(s) encontrados:', results })
  } catch (error: any) {
    res.status(500).send(error.message)
  }
}
