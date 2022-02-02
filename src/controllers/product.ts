import express, { Request, Response, NextFunction } from 'express'
import { BadRequestError } from '../helpers/apiError'
import Product, { ProductDocument } from '../models/Product'
import ProductService from '../services/product'

export const createProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const {
      name,
      price,
      digital,
      variant = [],
      images = [],
      quantity = 0,
      category = '',
    } = req.body
    const newProduct = new Product({
      name,
      images,
      price,
      digital,
      variant,
      quantity,
      category,
    })
    const product = await ProductService.createProduct(newProduct)
    res.json(product)
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}

// export const findAllProducts = async (
//     req: Request,
//     res: Response,
//     next: NextFunction
// ) => {
//     try{
//         const allProducts = await ProductService.findAllProducts()
//         return allProducts
//     }catch(error){
//         if(error instanceof Error && error.name=='ValidationError'){
//             next(new BadRequestError('Invalid Request', error))
//         }else{
//             next(error)
//         }
//     }
// }
