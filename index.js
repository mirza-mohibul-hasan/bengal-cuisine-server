const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const chefs = require('./data/chefs.json')
const recipes = require('./data/recipes.json')

app.get('/', (req, res) => {
    res.send('Recipe server is  running')
});

app.get('/chefs', (req, res) => {
    res.send(chefs);
});

app.get('/recipes/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const chefRecipe = recipes.filter(n => parseInt(n.chefId) === id);
    res.send(chefRecipe)
});

app.get('/recipes', (req, res) => {
    res.send(recipes);
});

app.listen(port, () => {
    console.log(`Recipe API is running on port: ${port}`)
})