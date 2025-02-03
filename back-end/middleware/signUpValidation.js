const { body, validationResult } = require('express-validator');

exports.SignUpValidation = [
    body('email', 'Please provide a Valide Email').isEmail()
    // body('password', 'Please provide a Valide Password').isLength({min:8})
]

exports.SignInValidation = [
    body('email', 'Please provide a Valide Email').isEmail()
]

exports.Validation = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ erros: errors.array() });
    }
    next();
}