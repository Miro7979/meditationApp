const express = require('express');
const path = require('path');
const app = express();
const session = require('express-session');
const mongoose = require('mongoose');
const connectMongo = require('connect-mongo')(session);
const Meditations = require('./models/Meditation');
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

const models = {
  Meditations: require('./models/Meditation'),
  Articles: require('./models/Articles')
};


// Use routes
app.use('/api/articles', articles);
app.use('/api/meditations', meditations);


// Start the web server
app.listen(3001, () => console.log('Listening on port 3001'));
