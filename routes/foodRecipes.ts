import express from "express";
let router = express.Router()

import  { 
    getRecipes,
    getRecipeByID,
    createRecipe,
    updateRecipeByID,
    deleteRecipeByID 
} from '../controllers/foodRecipes.js';

router.get('/', getRecipes)

router.get('/:id', getRecipeByID)

router.post('/', createRecipe) 

router.put('/:id', updateRecipeByID) 

router.delete('/:id', deleteRecipeByID)

export default router;
