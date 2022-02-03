import express from 'express'
import passport from 'passport'

import {
  createUser,
  findUserById,
  deleteUser,
  findAll,
  updateUser,
} from '../controllers/user'

const router = express.Router()

// Every path we define here will get /api/v1/movies prefix
router.get('/', findAll)
router.get('/:userId', findUserById)
router.put(
  '/:userId',
  passport.authenticate('jwt', { session: false }),
  updateUser
)
router.delete(
  '/:userId',
  passport.authenticate('jwt', { session: false }),
  deleteUser
)
router.post('/', passport.authenticate('jwt', { session: false }), createUser)

export default router
