const express = require('express');
const racesController = require('../controllers/racesController');
const classesController = require('../controllers/classesController');
const playersController = require('../controllers/playersController');

const router = express.Router();

router.put('/players',
  playersController.putPlayer,
  (req, res) => res.status(201).json(res.locals.player)
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
