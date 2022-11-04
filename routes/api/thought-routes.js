const router = require('express').Router();
const {
  addThought,
  getThoughts,
  getSingleThought,
  addReaction,
  removeReaction,


} = require('../../controllers/thought-controller');

// /api/thoughts/  (adds a thought and gets all thoughts)
router
 .route('/')
 .post(addThought)
 .get(getThoughts);

// /api/thoughts/:id   (gets one single thought)
router
  .route('/:id')
  .get(getSingleThought);


// /api/thoughts/:id   (adds a reaction)
router
.route('/:thoughtId/:reactions')
.post(addReaction);

// /api/thoughts/:id/reactions/:id    (removes a reaction))
router
.route('/:thoughtId/reactions/:reactionId')
.delete(removeReaction);

module.exports = router;

