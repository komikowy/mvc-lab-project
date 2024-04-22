const Recipe = require('../models/recipeModel');

exports.getEditRecipe = (req, res) => {
  const recipeId = req.params.id;
  const recipe = Recipe.getRecipeById(recipeId);
  if (!recipe) {
    console.error("Recipe not found");
    res.status(404).send('Recipe not found');
    return;
  }
  res.render('editRecipe', { recipe });
};

exports.editRecipe = (req, res) => {
  const recipeId = req.params.id;
  const { name, ingredients, instructions } = req.body;
  const recipe = Recipe.getRecipeById(recipeId);
  if (!recipe) {
    console.error("Recipe not found");
    res.status(404).send('Recipe not found');
    return;
  }
  recipe.name = name;
  recipe.ingredients = ingredients;
  recipe.instructions = instructions;
  res.redirect(`/recipe/${recipeId}`);
};

exports.deleteRecipe = (req, res) => {
  const recipeId = req.params.id;

  const deletedRecipeIndex = Recipe.getAllRecipes().findIndex(recipe => recipe.id === parseInt(recipeId));
  if (deletedRecipeIndex !== -1) {
    Recipe.getAllRecipes().splice(deletedRecipeIndex, 1);
    res.redirect('/recipe');
  } else {
    res.status(404).send('Recipe not found');
  }
};

exports.getAllRecipes = (req, res) => {
  const recipes = Recipe.getAllRecipes();
  res.render('recipeList', { recipes });
};

exports.getRecipeForm = (req, res) => {
  res.render('recipeForm');
};

exports.addRecipe = (req, res) => {
  const { name, ingredients, instructions } = req.body;
  Recipe.addRecipe(name, ingredients, instructions);
  res.redirect('/recipe');
};

exports.getRecipeDetails = (req, res) => {
  const recipeId = req.params.id;
  const recipe = Recipe.getRecipeById(recipeId);
  if (recipe) {
    res.render('recipeDetails', { recipe });
  } else {
    res.status(404).send('Recipe not found');
  }
};

exports.addRating = (req, res) => {
  const { recipeId } = req.body;
  const recipe = Recipe.getRecipeById(recipeId);
  if (!recipe) {
    console.error("Recipe not found");
    res.status(404).send('Recipe not found');
    return;
  }

  const newRating = Math.floor(Math.random() * 5) + 1;
  if (recipe.rating === null) {
    recipe.rating = newRating;
  } else {
    const oldRatingSum = recipe.rating * recipe.comments.length;
    recipe.rating = (oldRatingSum + newRating) / (recipe.comments.length + 1);
  }

  res.redirect(`/recipe/${recipeId}`);
};