import express, { Express } from 'express'
import { insertProduct, searchProduct } from '../controllers/products'

const router = express.Router()

router.route('/').get(searchProduct).post(insertProduct)

router.route('/:productId').get((req, res) => {
  res.send('productId productId')
})

export default router
