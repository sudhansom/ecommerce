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
export const findById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userId = req.params.userId as string
    const oneUser = await UserService.findById(userId)
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

// // PUT /movies/:movieId
// export const updateMovie = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   try {
//     const update = req.body
//     const movieId = req.params.movieId
//     const updatedMovie = await MovieService.update(movieId, update)
//     res.json(updatedMovie)
//   } catch (error) {
//     if (error instanceof Error && error.name == 'ValidationError') {
//       next(new BadRequestError('Invalid Request', error))
//     } else {
//       next(error)
//     }
//   }
// }

// // DELETE /movies/:movieId
// export const deleteMovie = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   try {
//     await MovieService.deleteMovie(req.params.movieId)
//     res.status(204).end()
//   } catch (error) {
//     if (error instanceof Error && error.name == 'ValidationError') {
//       next(new BadRequestError('Invalid Request', error))
//     } else {
//       next(error)
//     }
//   }
// }

// // GET /movies/:movieId
// export const findById = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   try {
//     res.json(await MovieService.findById(req.params.movieId))
//   } catch (error) {
//     if (error instanceof Error && error.name == 'ValidationError') {
//       next(new BadRequestError('Invalid Request', error))
//     } else {
//       next(error)
//     }
//   }
// }

// // GET /movies
// export const findAll = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   try {
//     res.json(await MovieService.findAll())
//   } catch (error) {
//     if (error instanceof Error && error.name == 'ValidationError') {
//       next(new BadRequestError('Invalid Request', error))
//     } else {
//       next(error)
//     }
//   }
// }
