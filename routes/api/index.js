const router = require('express').Router();
const user = require('./user.js');
const thought = require('./thought.js');

router.use('/users', user);
router.use('/thought', thought);

module.exports = router;