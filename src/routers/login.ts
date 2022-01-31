import express, { Request, Response, NextFunction } from 'express'
import passport from 'passport'

const router = express.Router()

router.post(
  '/',
  passport.authenticate('google-id-token', { session: false }),
  (req: Request, res: Response) => {
    res.json('login Successful...')
  }
)

export default router
