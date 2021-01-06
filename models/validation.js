//VALIDATION
const Joi = require('@hapi/joi');

//Register Valadation
const registerValidation = (data) => {
    const schema = Joi.object({
        name: Joi.string().min(3).required(),
        mail: Joi.string().required().email(),
        password: Joi.string().min(6).required(),
    });
    return schema.validate(data);
}


//Login Valadation
const loginValidation = (data) => {
    const schema = Joi.object({
        mail: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required()
    });
    return schema.validate(data);
}

module.exports.loginValidation = loginValidation;
module.exports.registerValidation = registerValidation;