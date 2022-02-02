import express from 'express'

import {
  findAllProducts,
  createProduct,
  findProductById,
} from '../controllers/product'

const router = express.Router()

router.post('/', createProduct)
router.get('/', findAllProducts)
router.get('/:productId', findProductById)

export default router
