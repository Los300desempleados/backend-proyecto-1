
import express from 'express'
import { userController } from '../controllers/index.js'

const router = express.Router()

router.put('/update/:id', userController.updatePassword)

export default router
