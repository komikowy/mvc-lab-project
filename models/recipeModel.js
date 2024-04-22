class Recipe {
  constructor(id, name, ingredients, instructions) {
    this.id = id;
    this.name = name;
    this.ingredients = ingredients;
    this.instructions = instructions;
    this.comments = [];
    this.rating = null;
  }

  static recipes = [];

  static getAllRecipes() {
    return this.recipes;
  }

  static getRecipeById(id) {
    const recipeId = parseInt(id);
    return this.recipes.find(recipe => recipe.id === recipeId);
  }

  static addRecipe(name, ingredients, instructions) {
    const id = this.recipes.length + 1;
    const newRecipe = new Recipe(id, name, ingredients, instructions);
    this.recipes.push(newRecipe);
    return newRecipe;
  }

  addComment(comment) {
    this.comments.push(comment);
  }

  updateRating(newRating) {
    if (this.comments.length === null) {
      this.rating = newRating;
    } else {
      const oldRatingSum = this.rating * this.comments.length;
      this.rating = (oldRatingSum + newRating) / (this.comments.length + 1);
    }
  }
  }

module.exports = Recipe;
