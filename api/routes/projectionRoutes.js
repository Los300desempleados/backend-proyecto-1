import { projectionController } from '../controllers/index'
import router from './authRoutes'

router
  .route('projection/:id')
  .delete(projectionController.deleteById)

export default router
