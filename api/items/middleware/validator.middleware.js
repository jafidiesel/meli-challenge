const validator = (schema, property, req, res, next) => {
  const { error } = schema.validate(req[property]);
  if (!error) return next();
  res.status(400).json({
    message: error.details[0].message,
  });
};
module.exports = validator;
