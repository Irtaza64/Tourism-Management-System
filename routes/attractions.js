const express = require('express');
const router = express.Router();
const {
  createAttraction,
  getTopRatedAttractions,
  getAllAttractions,
  getAttractionById
} = require('../controllers/attractionController');

router.post('/', createAttraction);
router.get('/top-rated', getTopRatedAttractions);
router.get('/', getAllAttractions);
router.get('/:id', getAttractionById);

module.exports = router; 