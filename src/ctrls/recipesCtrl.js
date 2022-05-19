const { getAllRecipes } = require("../models/Recipes");
const { addRecipeIngredientsById } = require("../models/Recipes");
const removeParamsFromResultSet = require("../validationUtils/removeParamsFromResultSet");
const hasParams = require("../validationUtils/hasParams");
const getIngredient = require("../models/Ingredients");

async function getAllRecipesCtr() {
  try {
    return await getAllRecipes().then((recipes) => {
      removeParamsFromResultSet(recipes, "id");
      recipes.map((recipe) =>
        removeParamsFromResultSet(recipe.ingredients, "id")
      )
      return recipes;
    })
  } catch (error) {
    throw new Error(error);
  }
}

async function addRecipeIngredientsByIdCtr(id, newIngredient) {
  
  try {
   const existIngredient = await getIngredient(newIngredient.name)    
   const hasCorrectParams = id || hasParams(newIngredient, ["id", "name"])
    if (!hasCorrectParams || !existIngredient) throw new Error("wrong params")      
      await addRecipeIngredientsById(+id, newIngredient);
    
  } catch (error) {
    throw new Error(error);
  }
}

module.exports = { getAllRecipesCtr, addRecipeIngredientsByIdCtr };
