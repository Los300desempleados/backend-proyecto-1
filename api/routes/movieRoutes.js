import { Router } from 'express'
import { movieController } from '../controllers/index.js'

const router = Router()

router.post('/movies', movieController.createMovie)

export default router

