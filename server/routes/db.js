const express = require('express');
const racesController = require('../controllers/racesController');

const router = express.Router();

router.get('/races',
  racesController.getRaces,
  (req, res) => res.status(200).json(res.locals.races)
);

// router.post('/character',
//   starWarsController.addCharacter,
//   (req, res) => res.status(200).json({})
// );

module.exports = router;
