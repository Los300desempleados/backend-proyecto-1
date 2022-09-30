
import express from 'express'
import { userController } from '../controllers/index.js'

const router = express.Router()

router.put('/updatePassword/:id', userController.updatePassword)
router.put('/updateUser/:id', userController.updateUser)

export default router
