import express, { Request, Response } from 'express'
import passport from 'passport'
import { JWT_SECRET } from '../util/secrets'
import jwt from 'jsonwebtoken'
const router = express.Router()

router.post(
  '/',
  passport.authenticate('google-id-token', { session: false }),
  (req: Request, res: Response) => {
    const user = req.user as string
    const token = jwt.sign({ user }, JWT_SECRET, { expiresIn: '2h' })

    res.json(token)
  }
)

export default router
