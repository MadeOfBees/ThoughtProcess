const Thought = require (`../models/index.js`);

async function getAll(req,res) {
    try {
        var thoughts = await Thought.find();
        res.json(thoughts);
    } catch (error) {
        res.json(error);
    }
}

module.exports = {getAll}