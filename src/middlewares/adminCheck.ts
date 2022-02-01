import express, { Request, Response, NextFunction } from 'express'
import { ForbiddenError } from '../helpers/apiError'

type User = {
  email: string
  role: string
}
export const adminCheck = (req: Request, res: Response, next: NextFunction) => {
  const user = req.user.user as User

  if (user.role === 'admin') {
    console.log('user is :::', user.role)
    next()
  } else {
    throw new ForbiddenError()
  }
}
