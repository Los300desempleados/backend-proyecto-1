import { Router } from 'express'
import { commentController } from '../controllers/index.js'

const router = Router()

router.post('/comments', commentController.createComment)

export default router
