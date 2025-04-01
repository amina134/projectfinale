const userSchema = require('../model/user');
const jwt = require('jsonwebtoken'); // Make sure to import jwt

exports.AuthValidation = async (req, res, next) => {
    try {
        // Check if Authorization header exists
        const authHeader = req.header('Authorization');
        if (!authHeader) {
            return res.status(401).json({ message: 'Access denied. No token provided.' });
        }

        // Extract the token - typically sent as "Bearer [token]"
        const token = authHeader.startsWith('Bearer ') ? 
            authHeader.substring(7) : authHeader;
        
        // Verify the token
        const decoded = jwt.verify(token, 'azerty');
        
        // Find user by id
        const user = await userSchema.findById(decoded.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found.' });
        }
        
        // Attach user to the request object
        res.user = user; // Note: should be req.user, not res.user
        req.user = user;
        // Continue to the next middleware/route handler
        next();
    } catch (error) {
        console.log(error);
        
        if (error.name === 'JsonWebTokenError') {
            return res.status(401).json({ message: 'Invalid token.' });
        }
        
        if (error.name === 'TokenExpiredError') {
            return res.status(401).json({ message: 'Token expired.' });
        }
        
        return res.status(500).json({ message: 'Internal server error.' });
    }
};