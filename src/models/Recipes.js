const fs = require("fs").promises;

async function getAllRecipes() {
  try {
    return await JSON.parse(await fs.readFile(".\\src\\db\\recipes.json", "utf8")
    );
  } catch (error) {
    throw new Error(error);
  }
}
//solo a scopo di valutazione, in un caso reale prendiamo puntualmente dal db
async function getRecipeById(id) {
  try {
    const recipes = await getAllRecipes();
    return recipes.find(recipe => recipe.id === id);
  } catch (error) {
    throw new Error(error);
  }
}

//brutto, ma è giusto per prototipare
 function addRecipeIngredientsById(id, newIngredient) {
  try {    
   console.log(id, newIngredient)
      getAllRecipes()
              .then(recipes => {                      
                      recipes.find(recipe => recipe.id === id).ingredients
                             .push(newIngredient)
                    return recipes})
              .then(recipes => fs.writeFile(".\\src\\db\\recipes.json", JSON.stringify(recipes), "utf8", err => {if (err) return new Error(err)}))
  }
  catch (error) {
    throw new Error(error);
  } 
}

    



module.exports = { getAllRecipes, getRecipeById, addRecipeIngredientsById };
