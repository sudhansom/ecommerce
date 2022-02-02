import { NotFoundError } from '../helpers/apiError'
import Product, { ProductDocument } from '../models/Product'

const createProduct = async (
  newProduct: ProductDocument
): Promise<ProductDocument> => {
  return newProduct.save()
}
const findAllProducts = async (): Promise<ProductDocument[]> => {
  return await Product.find()
}
const findProductById = async (
  productId: string
): Promise<ProductDocument | null> => {
  const foundProduct = await Product.findById(productId)
  if (!foundProduct) {
    throw new NotFoundError(`Product ${productId} not found`)
  } else {
    return foundProduct
  }
}

const deleteProduct = async (
  productId: string
): Promise<ProductDocument | null> => {
  const foundProduct = await Product.findByIdAndDelete(productId)
  if (!foundProduct) {
    throw new NotFoundError(`Product ${productId} not found`)
  } else {
    return foundProduct
  }
}

const updateProduct = async (
  productId: string,
  update: Partial<ProductDocument>
): Promise<ProductDocument | null> => {
  const foundProduct = await Product.findByIdAndUpdate(productId, update)
  console.log('updated product  ', foundProduct)
  if (!foundProduct) {
    throw new NotFoundError(`Product ${productId} not found`)
  } else {
    return foundProduct
  }
}

export default {
  createProduct,
  findAllProducts,
  findProductById,
  deleteProduct,
  updateProduct,
}
