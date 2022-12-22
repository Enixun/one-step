
const models = require('../models/charactersModels');

const classesController = {};

classesController.getClasses = (req, res, next) => {
  // write code here
  models.Class.find()
    .then((classes) => {
      res.locals.classes = classes;
      return next();
    })
    .catch(error => {
      return next({log: `${error}`});
    }
  );
};

module.exports = classesController;
