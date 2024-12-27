const Attraction = require('../models/Attraction');
const Review = require('../models/Review');

exports.createAttraction = async (req, res) => {
  try {
    const attraction = await Attraction.create(req.body);
    res.status(201).json(attraction);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getTopRatedAttractions = async (req, res) => {
  try {
    const attractions = await Attraction.find()
      .sort({ rating: -1 })
      .limit(5);
    res.json(attractions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Additional CRUD operations
exports.getAllAttractions = async (req, res) => {
  try {
    const attractions = await Attraction.find();
    res.json(attractions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAttractionById = async (req, res) => {
  try {
    const attraction = await Attraction.findById(req.params.id);
    if (!attraction) {
      return res.status(404).json({ error: 'Attraction not found' });
    }
    res.json(attraction);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}; 