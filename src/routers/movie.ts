import express from 'express'
import passport from 'passport'
import { adminCheck } from '../middlewares/adminCheck'
import {
  createMovie,
  findById,
  deleteMovie,
  findAll,
  updateMovie,
} from '../controllers/movie'

const router = express.Router()

// Every path we define here will get /api/v1/movies prefix
router.get(
  '/',
  passport.authenticate('jwt', { session: false }),
  adminCheck,
  findAll
)
router.get('/:movieId', findById)
router.put(
  '/:movieId',
  passport.authenticate('jwt', { session: false }),
  updateMovie
)
router.delete('/:movieId', deleteMovie)
router.post('/', createMovie)

export default router
