const Joi = require('joi');

// Define validation schema
const validateBook = (data) => {
  const schema = Joi.object({
    title: Joi.string().required(),
    author: Joi.string().required(),
    isbn: Joi.string().required(),
    publishedYear: Joi.number().optional(),
    isFavorite: Joi.boolean().optional(),
  });

  return schema.validate(data);
};

module.exports = validateBook;
