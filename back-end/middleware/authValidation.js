let jwt = require('jsonwebtoken');
const userSchema = require('../model/user');
// ensure that only authenticated users can access certain routes or resources in your application by using
// BY 1.Retrieving the Token  2.Verifying the Token   3.Fetching the User  4.Proceeding or Blocking
exports.AuthValidation = async (req, res, next) => {
    try {
        const token = req.header('Authorization');
        let decoded = jwt.verify(token, 'azerty');
        if (!decoded) { return res.json({ errors }) };
        const user = await userSchema.findById(decoded.id);
        res.user = user;
        next();
    } catch (error) {
        console.log(error);
    }
}