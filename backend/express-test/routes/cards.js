const express = require('express');
const { Card } = require('../db');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const cards = await Card.find();
    res.json(cards);
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
      image:req.body.image,
      id:req.body.id
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
