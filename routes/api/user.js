const router = require('express').Router();
const {getAll} = require(`../../controllers/user`)

router.route(`/`).get(getAll) 

module.exports = router