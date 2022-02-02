import Product, { ProductDocument } from '../models/Product'

const createProduct = async (
  newProduct: ProductDocument
): Promise<ProductDocument> => {
  return newProduct.save()
}
const findAllProducts = async (): Promise<ProductDocument[]> => {
  return await Product.find()
}

export default {
  createProduct,
  findAllProducts,
}
