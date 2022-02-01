import express from 'express'

import {
  createUser,
  findById,
  //   deleteMovie,
  findAll,
  //   updateMovie,
} from '../controllers/user'

const router = express.Router()

// Every path we define here will get /api/v1/movies prefix
router.get('/', findAll)
router.get('/:userId', findById)
// router.put('/:movieId', updateMovie)
// router.delete('/:movieId', deleteMovie)
router.post('/', createUser)

export default router
