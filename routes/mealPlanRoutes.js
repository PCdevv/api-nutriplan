import { Router } from 'express'
import { MealPlanController } from '../controllers/mealPlanController.js'

const router = Router()

router.get('/', MealPlanController.getMealPlans)
router.post('/', MealPlanController.createMealPlan)
router.post('/duplicate', MealPlanController.duplicateMealPlans)
router.patch('/:id', MealPlanController.updateServings)
router.delete('/:id', MealPlanController.deleteMealPlan)

export default router
