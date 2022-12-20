const express = require('express');
const racesController = require('../controllers/racesController');

const starWarsController = require('../controllers/racesController');

const router = express.Router();

router.get('/races',
  racesController.getRaces,
  (req, res) => res.status(200).json(res.locals.races)
);

// router.get('/species',
//   starWarsController.getSpecies,
//   (req, res) => res.status(200).json(res.locals.species)
// );

// router.get('/homeworld',
//   starWarsController.getHomeworld,
//   (req, res) => res.status(200).json(res.locals.homeworld)
// );

// router.get('/film',
//   starWarsController.getFilm,
//   (req, res) => res.status(200).json(res.locals.film)
// );

// router.post('/character',
//   starWarsController.addCharacter,
//   (req, res) => res.status(200).json({})
// );

module.exports = router;
