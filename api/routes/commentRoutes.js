import express from 'express'
import { commentController } from '../controllers/index.js'
import { authValidator } from '../middlewares/index.js'

const router = express.Router()

router.route('/comments').post(authValidator, commentController.create)

export default router
