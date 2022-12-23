const express = require('express');
const racesController = require('../controllers/racesController');
const classesController = require('../controllers/classesController');
const playerCharacterssController = require('../controllers/playerCharactersController');

const router = express.Router();

router.put('/player_characters',
  playerCharacterssController.putPlayerCharacter,
  (req, res) => res.status(201).json(res.locals.playerCharacter)
);

router.get('/player_characters',
  playerCharacterssController.getPlayerCharacters,
  (req, res) => res.status(200).json(res.locals.playerCharacters)
);

router.delete('/player_characters',
  playerCharacterssController.deletePlayerCharacter,
  (req, res) => res.status(200).json(res.locals.deleted)
);

router.get('/races',
  racesController.getRaces,
  (req, res) => res.status(200).json(res.locals.races)
);

router.get('/classes',
  classesController.getClasses,
  (req, res) => res.status(200).json(res.locals.classes)
);

module.exports = router;
