import { Request, Response, NextFunction } from 'express'

import Users from '../models/Users'
import UserService from '../services/users'
import { BadRequestError } from '../helpers/apiError'

//GET all users '/users'
export const findAll = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const allUsers = await UserService.findAll()
    res.json(allUsers)
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}
//GET one specific user by ID  '/users:userId'
export const findUserById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userId = req.params.userId as string
    const oneUser = await UserService.findUserById(userId)
    res.json(oneUser)
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}
// POST /movies
export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const {
      firstName,
      lastName,
      email,
      address = [],
      password = '',
      role = '',
      order = [],
    } = req.body

    const user = new Users({
      firstName,
      lastName,
      email,
      address,
      password,
      role,
      order,
    })

    await UserService.createUser(user)
    res.json(user)
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}

// PUT update a user /users/:userId
export const updateUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const update = req.body
    const userId = req.params.userId
    const updatedUser = await UserService.updateUser(userId, update)
    res.json(updatedUser)
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Response', error))
    } else {
      next(error)
    }
  }
}

// DELETE /users/:userId
export const deleteUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userId = req.params.userId
    const deleted = await Users.findByIdAndDelete(userId)
    res.json(deleted)
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Response', error))
    } else {
      next(error)
    }
  }
}
