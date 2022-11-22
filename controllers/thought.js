const {Thought, User} = require (`../models/index.js`);

async function getAll(req,res) {
    try {
        var thoughts = await Thought.find();
        res.json(thoughts);
    } catch (error) {
        res.json(error);
    }
}

async function getByID(req,res) {
    try {
        const search = req.params.id
        var thought = await Thought.findById(search);
        res.json(thought);
    } catch (error) {
        res.json(error);
    }
}

async function updateThought (req,res){
    try {
        const search = {_id:req.params.id}
        const updateThought = await Thought.findOneAndUpdate(search,req.body);
        res.json(updateThought);
    } catch (error) {
        console.log(error)
        res.json(error);
    }
}

async function deleteThought(req,res) {
    try {
        const search = {_id:req.params.id}
        await Thought.deleteOne(search);
        res.json("Brain:bleached");
    } catch (error) {
        res.json(error);
    }
}

async function addAThought (req,res){
    try {
        const thought = await Thought.create(req.body);
        const id = req.body.userId;
        var final = {$push:{thoughts:thought._id}};
        await User.findOneAndUpdate(id,final);
        res.json(thought);
    } catch (error) {
        console.log(error)
        res.json(error);
    }
}

async function addAReaction (req,res){
    try {
        const thoughtID = {_id:req.params.thoughtId};
        const thoughtReaction ={$push:{reactions:req.body}};
        await Thought.findOneAndUpdate(thoughtID,thoughtReaction);
        res.json("Added reaction");
    } catch (error) {
        console.log(error)
        res.json(error);
    }
}

async function deleteAReaction (req,res){
    try {
        const thoughtID = {_id:req.params.thoughtId};
        const thoughtReaction ={$pull:{reactions:{_id:req.body.reactionId}}};
        await Thought.findOneAndUpdate(thoughtID,thoughtReaction);
        res.json("Deleted reaction");
    } catch (error) {
        console.log(error)
        res.json(error);
    }
}

module.exports = {getAll,getByID,updateThought,deleteThought,addAThought,addAReaction,deleteAReaction}