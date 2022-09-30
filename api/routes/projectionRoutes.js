import express from 'express'
import { projectionController } from '../controllers/index.js'

const router = express.Router()

router.get('/findmovie', projectionController.findMovie)

export default router
