const router = require('express').Router();
const {getAll,getByID,updateThought,deleteThought,addAThought,addAReaction,deleteAReaction} = require(`../../controllers/thought`)

router.route(`/`).get(getAll).post(addAThought);

router.route(`/:id`).get(getByID).put(updateThought).delete(deleteThought);

router.route(`/:thoughtId/reactions`).post(addAReaction).delete(deleteAReaction);

module.exports = router;