const models = require('../models/charactersModels');

const playerCharactersController = {};

playerCharactersController.getPlayerCharacters = (req, res, next) => {
  models.PlayerCharacter.find({}, (err, playerCharacters) => {
    if (err) return next({
      log: `Error from playersController.getPlayerCharacters: ${err}`, 
      message: {err: 'Error pulling to database.'}
    });
    res.locals.playerCharacters = playerCharacters;
    return next();
  })
};

playerCharactersController.putPlayerCharacter = (req, res, next) => {
  models.PlayerCharacter.create(req.body, (err, newCharacter) => {
    if (err) return next({log: `Error from playersController.putPlayer: ${err}`, message: {err: 'Error uploading to database.'}});
    res.locals.playerCharacter = newCharacter;
    return next();
  });
};

playerCharactersController.deletePlayerCharacter = (req, res, next) => {
  models.PlayerCharacter.findOneAndDelete(req.query.id, (err, deleted) => {
    if (err) return next({log: `Error from playersController.putPlayer: ${err}`, message: {err: 'Error uploading to database.'}});
    res.locals.deleted = deleted;
    return next();
  });
};

module.exports = playerCharactersController;
