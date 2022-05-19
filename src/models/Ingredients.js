const fs = require("fs").promises;

async function getIngredient(name) {  
        const data = fs.readFile("./src/db/ingredients.json", "utf8", err => {if (err) throw new Error(err)})
        const ingredients = JSON.parse(await data);
        return ingredients.find(ingredient => ingredient.name === name )           
    
}
module.exports = getIngredient;