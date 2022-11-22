const router = require('express').Router();
const {getAll, addAUser, getByID, updateUser, deleteUser,addAFriend} = require(`../../controllers/user`)

router.route(`/`).get(getAll).post(addAUser);

router.route(`/:id`).get(getByID).put(updateUser).delete(deleteUser);

router.route(`/:userId/friends/:friendId`).post(addAFriend);


module.exports = router