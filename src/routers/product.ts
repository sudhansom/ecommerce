import express from 'express'
import passport from 'passport'
import {
  findAllProducts,
  createProduct,
  findProductById,
  deleteProduct,
  updateProduct,
} from '../controllers/product'

const router = express.Router()

router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  createProduct
)
router.get('/', findAllProducts)
router.get('/:productId', findProductById)
router.delete(
  '/:productId',
  passport.authenticate('jwt', { session: false }),
  deleteProduct
)
router.patch('/:productId', updateProduct)

export default router
