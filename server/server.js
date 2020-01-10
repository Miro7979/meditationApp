const express = require('express');
const path = require('path');
const app = express();
const session = require('express-session');
const mongoose = require('mongoose');
const connectMongo = require('connect-mongo')(session);
const Meditation = require('./models/Meditation');
const salt = 'meditationaregood'; // unique secret

const articles = require('./routes/api/articles');
const meditations = require('./routes/api/meditations');

// connect to MongoDB via Mongoose
mongoose.connect('mongodb://localhost/meditation', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

const db = mongoose.connection;

// check connection
db.once('open', () => {
  console.log('Connected to MongoDB')
});

// Check for DB errors
db.on('error', (err) => {
  console.log(err)
})

app.use(session({
  secret: salt, // a unique secret
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }, // true on htttps server
  store: new connectMongo({ mongooseConnection: mongoose.connection })
}));



app.use(express.json())
// connect acl middleware
// const acl = require('./acl');
// const aclRules = require('./acl-rules.json');
// app.use(acl(aclRules));

// const theRest = require('the.rest');
// const pathToModelFolder = path.join(__dirname, 'models');
// app.use(theRest(express, '/api', pathToModelFolder));








// app.get('/api/meditations', async (req, res) => {
//   let meditations = await Meditation.find();
//   res.json(meditations);
// });


const models = {
  Meditations: require('./models/Meditation'),
  Articles: require('./models/Articles')
};
// A route that returns all books from Mongo
/* app.get('/json/makronutrients', async (req, res) => {
    let makronutrients = await Makronutrient.find();
    res.json(makronutrients);
  });*/
// const models = {
//     Makronutrients: require('./models/Makronutrient.js'),
//     Recipes: require('./models/Recipe.js'),
//     Uploads: require('./models/Upload.js'),
//     Scrapes: require('./models/Scrape.js')
// };

// create all necessary rest routes for the models
// new CreateRestRoutes(app, global.db, models);


// A route that returns all makronutrients from Mongo
// app.get('/json/makronutrients', async (req, res) => {
//   let makronutrients = await Makronutrient.find();
//   res.json(makronutrients);
// });

// A route that returns all recipes from Mongo
// app.get('/json/recipezs', async (req, res) => {
//   let recipes = await Recipe.find();
//   res.json(recipes);
// });

// app.get('/json/recipezs/:partialRecipe', async (req, res) => {
//   const regExpression = new RegExp(req.params.partialRecipe, "i");
//   let recipes = await Recipe.find({ name: regExpression }).catch((err) => {
//     res.json({ error: err });
//   });
//   res.json(recipes);
// });

// app.get('/json/recipeswiththiscategorys/:partialCategory', async (req, res) => {
//   const regExpression = new RegExp(req.params.partialCategory, "i");
//   let recipes = await Recipe.find({ category: regExpression }).catch((err) => {
//     res.json({ error: err});
//   });
//   res.json(recipes);
// });

// Use routes
app.use('/api/articles', articles);
app.use('/api/meditations', meditations);

// app.use(express.static('client/build'));
// Start the web server
app.listen(3001, () => console.log('Listening on port 3001'));
