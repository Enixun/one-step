const models = require('../models/charactersModels');

const playersController = {};

playersController.putPlayer = (req, res, next) => {
  console.log('req.body in playersController.putPlayer: ', req.body);
  // write code here
  models.Player.create(req.body, (err, newPlayer) => {
    if (err) return next({log: `Error from playersController.putPlayer: ${err}`, message: {err: 'Error uploading to database.'}});
    res.locals.player = newPlayer;
    return next();
  })
};

module.exports = playersController;
