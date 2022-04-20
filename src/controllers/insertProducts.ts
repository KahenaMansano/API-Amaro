import { Request, Response } from 'express'
import knex from '../knex'

export async function insertProducts(req: Request, res: Response) {
  try {
    await knex('products_api_amaro').insert(req.body)
    res.status(201).send({ message: 'Lista inserida com sucesso!' })
  } catch (error: any) {
    res.status(500).send(error.message)
  }
}
