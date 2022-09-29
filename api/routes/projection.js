import express from 'express'
import { projectionController } from '../controllers/index.js'

const router = express.Router()

router.getAll('/findmovie', projectionController.findmovie)

export default router
