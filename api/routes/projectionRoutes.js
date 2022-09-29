import { projectionController } from '../controllers/index'
import router from './authRoutes'

router
  .delete(projectionController.deleteById)

export default router
