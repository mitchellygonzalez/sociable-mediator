const router = require('express').Router();
const {
  addThought,
  removeThought,
  addReaction,
  removeReaction
} = require('../../controllers/thought-controller');

// /api/thoughts/<userId>
router.route('/').post(addThought);

// /api/thoughts/<userId>/<thoughtId>
router
  .route('/:thoughtId')
  .put(addReaction)
  .delete(removeThought);

// /api/thoughts/<userId>/<thoughtId>/<reactionId>
router.route('/:thoughtId/:reactionId').delete(removeReaction);

module.exports = router;
