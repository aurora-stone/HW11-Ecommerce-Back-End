const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  Tag.findAll({
    include: [{model: Product, through: ProductTag}]
   }) .then ((tags) => {
   res.json(tags)
   })
});

router.get('/:id', (req, res) => {
  Tag.findOne({where: {id: req.params.id}}, {
    include: [{model: Product, through: ProductTag}]
   }) .then ((tag) => {
   res.json(tag)
   })
});

router.post('/', (req, res) => {
  Tag.create(req.body) 
  .then((tag) => {
    res.json(tag)
  })
});

router.put('/:id', (req, res) => {
  Tag.update(req.body, {
    where: {id: req.params.id}
  }) .then((tag) => {
    res.json(tag)
  })
  })

router.delete('/:id', (req, res) => {
  Tag.destroy({where: {id: req.params.id}})
  .then((tag) => {
    res.json(tag)
  })});

module.exports = router;
