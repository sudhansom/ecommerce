import express, { Request, Response, NextFunction } from 'express'

export const adminCheck = (req: Request, res: Response, next: NextFunction) => {
  console.log('now checking the admin')
  next()
}
