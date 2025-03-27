const userSchema = require('../model/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const getAllUsers = async (req, res) => {
    try {
        const users = await userSchema.find();
        res.status(200).json({ msg: 'You got all the users', users });
    } catch (error) {
        console.log(error);
       res.status(404).json({msg:'errroooor'})

    }
}

const addUser = async (req, res) => {
    try {
        const newUser = new userSchema(req.body);
        console.log("New User", req.body);

        await newUser.save();
        res.status(200).json({ msg: 'you added new User', newUser });
    } catch (error) {
        console.log(error);
        res.send('You have a problem');
    }
}

const getUserById = async (req, res) => {
    try {
        const { id } = req.params;
        console.log("id", id);
        const user = await userSchema.findById(id);
        res.status(200).json({ msg: 'User', user });
    } catch (error) {
        console.log(error);
        res.send('You have a problem');
    }
}

const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        console.log("id", id);
        const updatedUser = await userSchema.findByIdAndUpdate(id, { $set: { ...req.body } });
        console.log("Updated User", updatedUser);
        res.status(200).json({ msg: 'User updated', updatedUser });
    } catch (error) {
        console.log(error);
        res.send('You have a problem');
    }
}

const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        console.log("id", id);
        const deletedUser = await userSchema.findByIdAndDelete(id);
        res.status(200).json({ msg: 'User', deletedUser });
    } catch (error) {
        console.log(error);
        res.send('You have a problem');
    }
}

//////// signIn start //////////


const signIn = async (req, res) => {
    try {
        const { email, password } = req.body;
        const found = await userSchema.findOne({ email });
        console.log(found);
        if (!found) { return res.json({ msg: 'Email not found' }) };
        const match = bcrypt.compare(password, found.password);
        if (!match) { return res.json({ msg: 'False password' }) };

        const payload = { id: found._id };
        const token = jwt.sign(payload, 'azerty');
        res.json({ msg: 'you are welcome SignIn', found, token });
        console.log('Logged in to your session successfully', email, password);
    } catch (error) {
        console.log(error);
    }
}

//////// signIn end //////////

//////// signUp start /////////
const signUp = async (req, res) => {
    try {
        const { userName, email, password} = req.body;

        if (!userName) {
          return res.status(400).json({ error: "Username is required" });
        }
       
        const found = await userSchema.findOne({ email });
        if (found) { return res.json({ msg: 'Already registered' }) };

        const newUser = await new userSchema(req.body);

        const saltRounds = 10;
        const salt = bcrypt.genSaltSync(saltRounds);
        const hash = bcrypt.hashSync(password, salt);
        newUser.password = hash;
        newUser.save();
        res.status(200).json({ msg: 'Welcome' });

    } catch (error) {
        console.log(error);
    }
}
/////// signUp end ////////////



module.exports = { getAllUsers, addUser, getUserById, updateUser, deleteUser, signIn, signUp };