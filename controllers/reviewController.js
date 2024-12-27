const Review = require('../models/Review');
const Attraction = require('../models/Attraction');
const Visitor = require('../models/Visitor');

exports.createReview = async (req, res) => {
  try {
    const { attractionId, visitorId, score, comment } = req.body;

    // Check if visitor has visited the attraction
    const visitor = await Visitor.findById(visitorId);
    if (!visitor.visitedAttractions.includes(attractionId)) {
      return res.status(400).json({ error: 'Visitor has not visited this attraction' });
    }

    // Create review
    const review = await Review.create({
      attraction: attractionId,
      visitor: visitorId,
      score,
      comment
    });

    // Update attraction rating
    await updateAttractionRating(attractionId);

    res.status(201).json(review);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Helper function to update attraction rating
const updateAttractionRating = async (attractionId) => {
  const reviews = await Review.find({ attraction: attractionId });
  const averageRating = reviews.reduce((acc, rev) => acc + rev.score, 0) / reviews.length;
  await Attraction.findByIdAndUpdate(attractionId, { rating: averageRating });
}; 