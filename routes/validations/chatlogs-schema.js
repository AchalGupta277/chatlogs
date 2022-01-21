const Joi = require('joi'); 
const ValidUserIdParamSchema = Joi.object({
    userId: Joi.string().min(1).max(16).required(),
}).required();

const AddMessageSchema = Joi.object({
    message: Joi.string().max(250).required(),
    isSent: Joi.boolean().required(),
}).required();

const DeleteChatLogSchema = Joi.object({
    msgId: Joi.string().min(1).max(32).required(),
    userId: Joi.string().min(1).max(16).required(),
}).required();

module.exports = {
    AddMessageSchema,
    DeleteChatLogSchema,
}