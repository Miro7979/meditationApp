const express = require('express');
const router = express.Router();


// model
const Articles = require('../../models/Articles');

// route GET api/articles and more

// desc GET all items

// access Public
router.get('/', (req, res) => {
  Articles.find()
    .then(articles => res.json(articles))
})


// Post
router.post('/', (req, res) => {
  const newArticle = new Articles({
    startPageArticle1: req.body.startPageArticle1,
    startPageArticle2: req.body.startPageArticle2,
    startPageArticle3: req.body.startPageArticle3,
    helpPageArticle1: req.body.helpPageArticle1,
    helpPageArticle2: req.body.helpPageArticle2,
    helpPageArticle3: req.body.helpPageArticle3,
    helpPageStep1: req.body.helpPageStep1,
    helpPageStep2: req.body.helpPageStep2,
    helpPageStep3: req.body.helpPageStep3,
    helpPageStep4: req.body.helpPageStep4,
    helpPageStep5: req.body.helpPageStep5,
    aboutUsPageArticle: req.body.aboutUsPageArticle
  });
  newArticle.save().then(article => res.json(article));
});

// delete
router.delete('/:id', (req, res) => {
  Articles.findById(req.params.id)
    .then(article.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
})


module.exports = router;