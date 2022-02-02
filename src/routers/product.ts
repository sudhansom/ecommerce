import express from 'express'

import {
  findAllProducts,
  createProduct,
  findProductById,
  deleteProduct,
} from '../controllers/product'

const router = express.Router()

router.post('/', createProduct)
router.get('/', findAllProducts)
router.get('/:productId', findProductById)
router.delete('/:productId', deleteProduct)

export default router
