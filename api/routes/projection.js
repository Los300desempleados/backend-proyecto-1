import express from 'express'
import { projectionController } from '../controllers/index.js'

const router = express.Router()

router.getAll('/findmovie', projectionController.findmovie)
router.create('/create', projectionController.create)

export default router
