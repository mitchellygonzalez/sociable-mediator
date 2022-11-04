const router = require('express').Router();
const {
  addThought,
  removeThought,
  addReaction,
  removeReaction,
  getSingleThought,
  getThoughts
} = require('../../controllers/thought-controller');

// /api/thoughts/
router
.route('/').post(addThought)
.get(getThoughts);


// /api/thoughts/<thoughtId>
router
  .route('/:thoughtId')
  .get(getSingleThought)
  .delete(removeThought);

router
  .route('/thoughts')
  .get(getThoughts)

// /api/thoughts/<thoughtId>/<reactionId>
router
.route('/:thoughtId/:reactionId').delete(removeReaction);

module.exports = router;
