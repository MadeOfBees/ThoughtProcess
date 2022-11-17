const router = require('express').Router();
const {getAll} = require(`../../controllers/thought`)

router.route(`/`).get(getAll) 

module.exports = router