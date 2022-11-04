const router = require('express').Router();
const {
  addThought,
  getThoughts,
  getSingleThought,
  removeThought,
  addReaction,
  removeReaction,


} = require('../../controllers/thought-controller');

// /api/thoughts/
router
 .route('/')
 .post(addThought)
 .get(getThoughts);

// /api/thoughts/:id
router
  .route('/:id')
  .get(getSingleThought)


// /api/thoughts/<thoughtId>
router
  .route('/:thoughtId')
  .get(getSingleThought)
  .delete(removeThought);

// /api/thoughts/<thoughtId>/<reactionId>
router
.route('/:thoughtId/:reactionId').delete(removeReaction);

module.exports = router;
