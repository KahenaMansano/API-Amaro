import { Request, Response } from 'express'
import knex from '../knex'

export async function searchProducts(req: Request, res: Response) {
  try {
    let query: any = {}
    Object.keys(req.query).forEach(key => {
      const val = req.query[key]
      if (val) query[key] = val
    })

    const results = await knex('products_api_amaro').where(query)

    res.status(200).send({
      message: 'É preciso inserir o parâmetro exato. Resultado da sua busca:',
      results
    })
  } catch (error: any) {
    res.status(500).send(error.message)
  }
}
