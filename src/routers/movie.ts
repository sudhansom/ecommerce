import express from 'express'

import {
  createMovie,
  findById,
  deleteMovie,
  findAll,
  updateMovie,
} from '../controllers/movie'

const router = express.Router()

// Every path we define here will get /api/v1/movies prefix
router.get('/', () => {
  console.log('yes I am here...')
})
router.get('/:movieId', findById)
router.put('/:movieId', updateMovie)
router.delete('/:movieId', deleteMovie)
router.post('/', createMovie)

export default router
