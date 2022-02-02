import express from 'express'

import {
  findAllProducts,
  createProduct,
  findProductById,
  deleteProduct,
  updateProduct,
} from '../controllers/product'

const router = express.Router()

router.post('/', createProduct)
router.get('/', findAllProducts)
router.get('/:productId', findProductById)
router.delete('/:productId', deleteProduct)
router.patch('/:productId', updateProduct)

export default router
