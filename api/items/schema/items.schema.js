const Joi = require('joi');

const getAllItemsSchema = Joi.object({
    q: Joi.string().min(3).max(100).required(),
    limit: Joi.number().min(1).max(100),
    offset: Joi.number().min(0),
});

const getItemByIdSchema = Joi.object({
    id: Joi.string().min(3).max(30).required()
});

module.exports = {
    getAllItemsSchema,
    getItemByIdSchema
};