const router = require('express').Router();
const { Product, Tag, ProductTag } = require('../../models');

// get all product tags
router.get('/', (req, res) => {
    console.log('======================');
    ProductTag.findAll({
      // Query configuration
      attributes: ['id', 'created_at'],
      order: [['created_at','DESC']],
      include: [
        {
        model: [Product, Tag],
        attributes: ['product_name', 'tag_name']
        }
    ]
})
.then(dbProductTagData => res.json(dbProductTagData))
.catch(err => {
  console.log(err);
  res.status(500).json(err);
});
});

router.get('/:id', (req, res) => {
    ProductTag.findOne({
      where: {
        id: req.params.id
      },
      attributes: ['id','created_at'],
      include: [
        {
            model: [Product, Tag],
            attributes: ['product_name', 'tag_name']
            }
      ]
    })
      .then(dbProductTagData => {
        if (!dbProductTagData) {
          res.status(404).json({ message: 'No product found with this id' });
          return;
        }
        res.json(dbProductTagData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  
module.exports = router;