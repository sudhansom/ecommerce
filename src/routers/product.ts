import express from 'express'

import { findAllProducts, createProduct } from '../controllers/product'

const router = express.Router()

router.post('/', createProduct)
router.get('/', findAllProducts)

export default router
