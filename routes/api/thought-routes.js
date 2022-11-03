const router = require('express').Router();
const {
  addThought,
  removeThought,
  addReaction,
  removeReaction
} = require('../../controllers/thought-controller');

// /api/thoughts/
router.route('/').post(addThought);

// /api/thoughts/<thoughtId>
router
  .route('/:thoughtId')
  .put(addReaction)
  .delete(removeThought);

// /api/thoughts/<thoughtId>/<reactionId>
router.route('/:thoughtId/:reactionId').delete(removeReaction);

module.exports = router;
