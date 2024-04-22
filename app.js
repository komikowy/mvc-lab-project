const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static('public'));

const recipeRoutes = require('./routes/recipeRoutes');
const commentRoutes = require('./routes/commentRoutes');

app.use('/recipe', recipeRoutes);
app.use('/comment', commentRoutes);

app.get('/recipe', (req, res) => {
  res.redirect('/recipe/');
});

app.get('/', (req, res) => {
  res.redirect('/recipe');
});

app.get('/recipe/:id/edit', (req, res) => {
  res.redirect(`/recipe/${req.params.id}/edit`);
});

app.use((req, res, next) => {
  res.status(404).send("Sorry, can't find that!");
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
