const User = require (`../models/index.js`);

async function getAll(req,res) {
    try {
        var users = await User.find();
        res.json(users);
    } catch (error) {
        res.json(error);
    }
}

module.exports = {getAll}