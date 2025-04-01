const express = require('express');

const { getCartByUserId, addItemToCart, removeItemFromCart, clearCart,updateQuantityItemCart } = require('../controllers/cartContollers');

const cartRoute = express.Router();
cartRoute.use(express.json());
//http://localhost:4000/cart/getCart/:userId
cartRoute.get('/getCart/:userId', getCartByUserId);

//http://localhost:4000/cart/addCart/:userId
cartRoute.post('/addCart/:userId', addItemToCart);

//http://localhost:4000/cart/removeCart/:userId/:productId
cartRoute.delete('/removeCart/:userId/:productId', removeItemFromCart);

//http://localhost:4000/cart/ClearCart/:userId
cartRoute.delete('/clearCart/:userId', clearCart);

//http://localhost:4000/cart/updateQuantity/:userId/:productId
cartRoute.put('/updateQuantity/:userId/:productId',updateQuantityItemCart)

module.exports = cartRoute;
