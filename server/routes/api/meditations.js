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
    video: req.body.video
  });
  newMeditation.save().then(meditation => res.json(meditation));
});
module.exports = router;