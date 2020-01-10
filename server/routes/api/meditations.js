const express = require('express');
const router = express.Router();


// model
const Meditation = require('../../models/Meditation');

// route GET api/meditations and more

router.get('/', (req, res) => {
  Meditation.find()
    .then(meditations => res.json(meditations))
})

// post meditations
// Post
router.post('/', (req, res) => {
  const newMeditation = new Meditation({
    name: req.body.name,
    text: req.body.text,
    image: req.body.image,
    video: req.body.video,
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
  newMeditation.save().then(meditation => res.json(meditation));
});
module.exports = router;