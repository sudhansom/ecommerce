import express from 'express'

import {
  createUser,
  findUserById,
  //   deleteMovie,
  findAll,
  updateUser,
} from '../controllers/user'

const router = express.Router()

// Every path we define here will get /api/v1/movies prefix
router.get('/', findAll)
router.get('/:userId', findUserById)
router.put('/:userId', updateUser)
// router.delete('/:movieId', deleteMovie)
router.post('/', createUser)

export default router
