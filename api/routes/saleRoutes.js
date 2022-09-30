import { Router } from 'express'
import { saleController } from '../controllers/index.js'

const router = Router()

router.post('/sales', saleController.createSale)

export default router
