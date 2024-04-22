const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/recipeController');

router.get('/', recipeController.getAllRecipes);
router.get('/add', recipeController.getRecipeForm);
router.post('/add', recipeController.addRecipe);
router.get('/:id', recipeController.getRecipeDetails);
router.get('/:id/edit', recipeController.getEditRecipe);
router.post('/:id/edit', recipeController.editRecipe);
router.post('/:id/delete', recipeController.deleteRecipe);

module.exports = router;
