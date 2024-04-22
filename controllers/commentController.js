const Recipe = require('../models/recipeModel');
const Comment = require('../models/commentModel');

exports.addComment = (req, res) => {
  const { recipeId, text, rating } = req.body;

  const recipe = Recipe.getRecipeById(recipeId);
  if (!recipe) {
    console.error("Recipe not found");
    res.status(404).send('Recipe not found');
    return;
  }

  const newComment = new Comment(text);
  recipe.addComment(newComment);

  if (rating) {
    const newRating = parseInt(rating);
    if (recipe.rating === null) {

      recipe.rating = newRating;
    } else {
      const oldRatingSum = recipe.rating * recipe.comments.length;
      const newOverallRating = (oldRatingSum + newRating) / (recipe.comments.length + 1);
      recipe.rating = newOverallRating;
    }
  }

  res.redirect(`/recipe/${recipeId}`);
};
