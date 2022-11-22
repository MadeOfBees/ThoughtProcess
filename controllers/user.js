const {User} = require (`../models/index.js`);

async function getAll(req,res) {
    try {
        var users = await User.find();
        res.json(users);
    } catch (error) {
        res.json(error);
    }
}

async function getByID(req,res) {
    try {
        const search = req.params.id
        var user = await User.findById(search);
        res.json(user);
    } catch (error) {
        res.json(error);
    }
}

async function addAUser (req,res){
    try {
        const addUser = await User.create(req.body);
        res.json(addUser);
    } catch (error) {
        console.log(error)
        res.json(error);
    }
}

async function updateUser (req,res){
    try {
        const search = {_id:req.params.id}
        const updateUser = await User.findOneAndUpdate(search,req.body);
        res.json(updateUser);
    } catch (error) {
        console.log(error)
        res.json(error);
    }
}

async function deleteUser(req,res) {
    try {
        const search = {_id:req.params.id}
        await User.deleteOne(search);
        res.json("Deleted user");
    } catch (error) {
        res.json(error);
    }
}

async function addAFriend (req,res){
    try {
        const userId = {_id:req.params.userId}
        const friendId ={$push:{friends:req.params.friendId}}
        await User.findOneAndUpdate(userId,friendId);
        res.json("Friend added");
    } catch (error) {
        console.log(error)
        res.json(error);
    }
}

async function deleteAFriend (req,res){
    try {
        const user = {_id:req.params.userId}
        const target =  {$pull:{friends:req.params.friendId}};
        await User.findOneAndUpdate(user,target);
        res.json("Deleted friend")
    } catch (error) {
        
    }
}




module.exports = {getAll, addAUser, getByID, updateUser, deleteUser, addAFriend, deleteAFriend}