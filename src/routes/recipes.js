const express = require('express')
const router = express.Router()
const getAllRecipesCtr = require('..\\ctrls\\recipesCtrl').getAllRecipesCtr
const addRecipeIngredientsByIdCtr = require('..\\ctrls\\recipesCtrl').addRecipeIngredientsByIdCtr

router.get('/',  async function (req, res) {
  try {    
     res.status(200).send(await getAllRecipesCtr()) 
  } catch (error) {
    res.status(500).send(error)
    throw new Error('error')    
  }
   
})

router.put('/add/:id', async function (req, res) {
  try {
    const  id = req.params.id
    const newIngredient = req.body
   
    await addRecipeIngredientsByIdCtr(id, newIngredient)
    res.status(200).send(await getAllRecipesCtr())
  } catch (error) {
    res.status(500).send('error')
    throw new Error(error)
  }
})

module.exports = router