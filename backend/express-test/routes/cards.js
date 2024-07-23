const express = require('express');
const { Card } = require('../models/card.model');
const router = express.Router();

const buildFilterQuery = (searchTerm, buttonTag) => {
  const filter = {};

  if (searchTerm) {
    filter.title = { $regex: searchTerm, $options: 'i' }; 
  }

  if (buttonTag) {
    filter.tags = { $regex: buttonTag, $options: 'i' }; 
  }

  return filter;
};


router.get('/', async (req, res) => {
  try {
    const { searchTerm, buttonTag, page = 1, limit = 6, sortOption } = req.query;

    const filterQuery = buildFilterQuery(searchTerm, buttonTag);
    const skip = (page - 1) * limit;
    const sort = sortOption === 'createdAt' ? { createdAt: -1 } : {};

    const [cards, totalCount] = await Promise.all([
      Card.find(filterQuery).skip(skip).limit(Number(limit)).sort(sort),
      Card.countDocuments(filterQuery)
    ]);

    res.json({
      cards,
      totalCount,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});



router.post('/', async (req, res) => {
  try {
    const card = await Card.create({
      title: req.body.title,
      description: req.body.description,
      tags: req.body.tags,
      image: req.body.image,
      id: req.body.id,
    });
    res.json({
      message: 'Card created successfully',
      card: card,
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
