
const models = require('../models/charactersModels');

const racesController = {};

racesController.getRaces = (req, res, next) => {
  // write code here
  models.Race.find()
    .then((races) => {
      res.locals.races = races;
      return next();
    })
    .catch(error => {
      return next({log: `${error}`});
    }
  );
};

module.exports = racesController;
