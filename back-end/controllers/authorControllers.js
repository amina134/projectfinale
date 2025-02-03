const authorSchema = require('../model/author');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const getAllAuthors = async (req, res) => {
    try {
        const authors = await authorSchema.find();
        res.status(200).json({ msg: 'You got all the authors', authors });
    } catch (error) {
        console.log(error);
       res.status(404).json({msg:'errroooor'})

    }
}

const addAuthor = async (req, res) => {
    try {
        const newAuthor = new authorSchema(req.body);
        console.log("New Author", req.body);

        await newAuthor.save();
        res.status(200).json({ msg: 'you added new AUthor', newAuthor });
    } catch (error) {
        console.log(error);
        res.send('You have a problem');
    }
}

const getAuthorById = async (req, res) => {
    try {
        const { id } = req.params;
        console.log("id", id);
        const author = await authorSchema.findById(id);
        res.status(200).json({ msg: 'Author', author });
    } catch (error) {
        console.log(error);
        res.send('You have a problem');
    }
}

const updateAuthor = async (req, res) => {
    try {
        const { id } = req.params;
        console.log("id", id);
        const updatedAuthor = await authorSchema.findByIdAndUpdate(id, { $set: { ...req.body } });
        console.log("Updated Author", updatedAuthor);
        res.status(200).json({ msg: 'User updated', updatedAuthor });
    } catch (error) {
        console.log(error);
        res.send('You have a problem');
    }
}

const deleteAuthor= async (req, res) => {
    try {
        const { id } = req.params;
        console.log("id", id);
        const deletedAuthor = await authorSchema.findByIdAndDelete(id);
        res.status(200).json({ msg: 'User', deletedAuthor });
    } catch (error) {
        console.log(error);
        res.send('You have a problem');
    }
}

// //////// signIn start //////////


// const signIn = async (req, res) => {
//     try {
//         const { email, password } = req.body;
//         const found = await userSchema.findOne({ email });
//         console.log(found);
//         if (!found) { return res.json({ msg: 'Email not found' }) };
//         const match = bcrypt.compare(password, found.password);
//         if (!match) { return res.json({ msg: 'False password' }) };

//         const payload = { id: found._id };
//         const token = jwt.sign(payload, 'azerty');
//         res.json({ msg: 'you are welcome SignIn', found, token });
//         console.log('Logged in to your session successfully', email, password);
//     } catch (error) {
//         console.log(error);
//     }
// }

// //////// signIn end //////////

// //////// signUp start /////////
// const signUp = async (req, res) => {
//     try {
//         const { firstName, lastName, role, age, phone, email, password } = req.body;
//         const found = await userSchema.findOne({ email });
//         if (found) { return res.json({ msg: 'Already registered' }) };

//         const newUser = await new userSchema(req.body);

//         const saltRounds = 10;
//         const salt = bcrypt.genSaltSync(saltRounds);
//         const hash = bcrypt.hashSync(password, salt);
//         newUser.password = hash;
//         newUser.save();
//         res.status(200).json({ msg: 'Welcome' });

//     } catch (error) {
//         console.log(error);
//     }
// }
// /////// signUp end ////////////



module.exports = { getAllAuthors, addAuthor, getAuthorById, updateAuthor, deleteAuthor};