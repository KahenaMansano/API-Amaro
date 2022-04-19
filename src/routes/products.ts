import express from 'express'
import { insertProducts } from '../controllers/insertProducts'
import { searchProducts } from '../controllers/searchProducts'

const router = express.Router()

router.route('/insertList').post(insertProducts)
router.route('/search').get(searchProducts)

export default router
