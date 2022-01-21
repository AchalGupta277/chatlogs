const Joi = require('joi'); 
const ValidUserIdParamSchema = Joi.object({
    userId: Joi.string().min(1).max(16).required(),
}).required();

module.exports = {
    ValidUserIdParamSchema,
}