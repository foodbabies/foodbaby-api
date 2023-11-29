import express from 'express';

import {
  getRecipes,
  getRecipeByID,
  createRecipe,
  updateRecipeByID,
  deleteRecipeByID,
} from '../controllers/foodController.js';

const router = express.Router();

router.get('/', getRecipes);

router.get('/:id', getRecipeByID);

router.post('/', createRecipe);

router.put('/:id', updateRecipeByID);

router.delete('/:id', deleteRecipeByID);

export default router;
