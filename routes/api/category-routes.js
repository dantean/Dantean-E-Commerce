const router = require('express').Router();
const { Tag, Product, ProductTag, Category } = require('../../models');

// The `/category` endpoint
router.get('/', async (req, res) => {
  try {
const categoryData = await Category.findAll({
  include: [Product]
}) 
res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});



router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
});

router.post('/', (req, res) => {
  // create a new tag
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
