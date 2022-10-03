import express from 'express'
import { movieController } from '../controllers/movieController.js'
import { createMovieValidator } from '../middlewares/index.js'

const router = express.Router()

router
  .route('/Movie')
  .post(createMovieValidator, movieController.create)
  .get(movieController.getAll)

router
  .route('/movie/:id')
  .put(movieController.updateById)

export default router
