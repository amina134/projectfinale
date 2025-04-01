const Cart = require('../model/cart');
const Book = require('../model/book'); // Assuming you have a Product model

// Get cart by userId
const getCartByUserId = async (req, res) => {
    try {
        const { userId } = req.params;
        console.log("User ID:", userId);
        const cart = await Cart.findOne({ userId }).populate("items.productId");

        if (!cart) return res.status(404).json({ msg: 'Cart not found' });

        res.status(200).json({ msg: 'User Cart', cart });
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Error retrieving cart' });
    }
};

// Add item to cart
// Add item to cart
const addItemToCart = async (req, res) => {
  const { productId, quantity } = req.body;
  const { userId } = req.params;

  try {
      // Step 1: Fetch the product details using the productId
      const book = await Book.findById(productId);
      if (!book) {
          return res.status(404).json({ message: "Book not found" });
      }

      // Step 2: Find the user's cart
      let cart = await Cart.findOne({ userId });

      // If the user doesn't have a cart, create one
      if (!cart) {
          cart = new Cart({ userId, items: [] });
      }

      // Step 3: Check if the item already exists in the cart
      const existingItem = cart.items.find(item => item.productId.toString() === productId);

      if (existingItem) {
         
      } else {
          // If item doesn't exist, add it
          cart.items.unshift({
              productId: book._id, // Correct field name
              quantity,
          });
      }

      // Step 4: Save the updated cart
      await cart.save();

      // Step 5: Send the updated cart back as the response
      res.json({ cart });
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server error" });
  }
};

// Remove item from cart
const removeItemFromCart = async (req, res) => {
    try {
        const { userId, productId } = req.params;
        console.log("User ID:", userId, "Product ID:", productId);

        let cart = await Cart.findOne({ userId });

        if (!cart) return res.status(404).json({ msg: 'Cart not found' });

        cart.items = cart.items.filter(item => item.productId.toString() !== productId);

        await cart.save();
        res.status(200).json({ msg: 'Item removed from cart', cart });

    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Error removing item from cart' });
    }
};

// Clear the cart
const clearCart = async (req, res) => {
    try {
        const { userId } = req.params;
        console.log("User ID:", userId);

        let cart = await Cart.findOne({ userId });

        if (!cart) return res.status(404).json({ msg: 'Cart not found' });

        cart.items = [];
        await cart.save();

        res.status(200).json({ msg: 'Cart cleared', cart });

    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Error clearing cart' });
    }
};
// Update the quantity of an item in the cart
const updateQuantityItemCart = async (req, res) => {
  const { userId, productId } = req.params;
  const { newQuantity } = req.body; // Receive the updated quantity

  try {
      // Step 1: Fetch the user's cart
      let cart = await Cart.findOne({ userId }).populate("items.productId");

      if (!cart) {
          return res.status(404).json({ msg: 'Cart not found' });
      }

      // Step 2: Find the item in the cart and update the quantity
      const existingItem = cart.items.find(item => item.productId._id.toString() === productId);

      if (!existingItem) {
          return res.status(404).json({ msg: 'Item not found in cart' });
      }

      // Step 3: Update the quantity (ensure it stays within the stock limits)
      existingItem.quantity = Math.max(1, Math.min(newQuantity, existingItem.productId.stock));

      // Step 4: Save the updated cart
      await cart.save();

      res.status(200).json({ msg: 'Quantity updated', cart });
  } catch (error) {
      console.log(error);
      res.status(500).json({ msg: 'Error updating quantity' });
  }
};





module.exports = { getCartByUserId, addItemToCart, removeItemFromCart, clearCart,updateQuantityItemCart };
