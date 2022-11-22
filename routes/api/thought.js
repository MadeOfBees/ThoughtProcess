const router = require('express').Router();
const {getAll,getByID,updateThought,deleteThought} = require(`../../controllers/thought`)

router.route(`/`).get(getAll);

router.route(`/:id`).get(getByID).put(updateThought).delete(deleteThought);


module.exports = router