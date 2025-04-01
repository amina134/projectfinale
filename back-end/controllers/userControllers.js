const userSchema = require('../model/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const bookSchema= require('../model/book');
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



// // Add these new controller methods to your existing file

// /////// CART CONTROLLERS ///////

// // Get user's cart (corrected)
// const getCart = async (req, res) => {
//   try {
//       const user = await userSchema.findById(req.user.id)
//           .populate({
//               path: 'cart.book',
//               select: 'title price image stock',
//               model: 'Book' // Should match your Book model name
//           });

//       if (!user) {
//           return res.status(404).json({ success: false, msg: 'User not found' });
//       }

//       res.status(200).json({
//           success: true,
//           count: user.cart.length,
//           cart: user.cart // Include the actual cart items in response
//       });

//   } catch (error) {
//       res.status(500).json({ 
//           success: false,
//           msg: 'Server error fetching cart',
//           error: error.message
//       });
//   }
// };
//   // Add item to cart
//   const addToCart = async (req, res) => {
//     try {
//         const userId = req.user.id; // From AuthValidation
//         const { bookId, quantity } = req.body;
//       const user = await userSchema.findById(userId);
//       const existingItem = user.cart.find(item => item.book.toString() === bookId);
  
//       if (!existingItem) {
      
//         user.cart.push({ book: bookId, quantity });
//       }
  
//       await user.save();
//       res.status(200).json(user.cart);
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ msg: 'Error adding to cart' });
//     }
//   };
  
//   // controllers/userControllers.js
// const updateCartItem = async (req, res) => {
//     try {
//       const { itemId } = req.params;
//       let { newQuantity } = req.body;
  
//       // 1. Validate input
//       if (typeof newQuantity !== 'number' || isNaN(newQuantity)) {
//         return res.status(400).json({
//           success: false,
//           message: 'Quantity must be a valid number'
//         });
//       }
  
//       // 2. Convert to integer and validate range
//       newQuantity = parseInt(newQuantity);
//       if (newQuantity < 1) {
//         return res.status(400).json({
//           success: false,
//           message: 'Quantity must be at least 1'
//         });
//       }
  
//       // 3. Find user and cart item
//       const user = await userSchema.findById(req.user.id);
//       const cartItem = user.cart.id(itemId);
      
//       if (!cartItem) {
//         return res.status(404).json({
//           success: false,
//           message: 'Cart item not found'
//         });
//       }
  
//       // 4. Verify stock (optional)
//       const book = await bookSchema.findById(cartItem.book);
//       if (newQuantity > book.stock) {
//         return res.status(400).json({
//           success: false,
//           message: `Only ${book.stock} items available in stock`
//         });
//       }
  
//       // 5. Update and save
//       cartItem.quantity = newQuantity;
//       await user.save();
  
//       // 6. Return updated cart
//       const updatedUser = await userSchema.findById(req.user.id)
//         .populate('cart.book', 'title price stock');
      
//       res.status(200).json({
//         success: true,
//         cart: updatedUser.cart
//       });
  
//     } catch (error) {
//       console.error('Update cart error:', error);
//       res.status(500).json({
//         success: false,
//         message: 'Server error updating cart',
//         error: error.message
//       });
//     }
//   };
  
//   // Remove item from cart
//   const removeFromCart = async (req, res) => {
//     try {
//       const { itemId } = req.params;
      
//       const user = await userSchema.findById(req.user.id);
//       user.cart = user.cart.filter(item => item._id.toString() !== itemId);
//       await user.save();
      
//       res.status(200).json(user.cart);
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ msg: 'Error removing from cart' });
//     }
//   };
  
//   // Clear entire cart
//   const clearCart = async (req, res) => {
//     try {
//       const user = await userSchema.findByIdAndUpdate(
//         req.user.id,
//         { $set: { cart: [] } },
//         { new: true }
//       );
//       res.status(200).json(user.cart);
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ msg: 'Error clearing cart' });
//     }
//   };

module.exports = { getAllUsers, addUser, getUserById, updateUser, deleteUser, signIn, signUp };