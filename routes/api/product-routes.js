const router = require('express').Router();
const { Category, Product } = require('../../models');

// get all products
router.get('/', (req, res) => {
    console.log('======================');
    Product.findAll({
      // Query configuration
      attributes: ['id', 'name', 'price', 'stock', 'created_at'],
      order: [['created_at','DESC']],
      include: [
        {
        model: Category,
        attributes: ['name']
        }
    ]
})
.then(dbProductData => res.json(dbProductData))
.catch(err => {
  console.log(err);
  res.status(500).json(err);
});
});

router.get('/:id', (req, res) => {
    Product.findOne({
      where: {
        id: req.params.id
      },
      attributes: ['id', 'name', 'price', 'stock', 'created_at'],
      include: [
        {
          model: Category,
          attributes: ['name']
        }
      ]
    })
      .then(dbProductData => {
        if (!dbProductData) {
          res.status(404).json({ message: 'No product found with this id' });
          return;
        }
        res.json(dbProductData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  router.post('/', (req, res) => {
      Product.create({
      name: req.body.name,
      price: req.body.price,
      stock: req.body.stock,
      category_id: req.body.category_id
    })
      .then(dbProductData => res.json(dbProductData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
  router.put('/:id', (req, res) => {
    Post.update(
      {
        name: req.body.name
      },
      {
        where: {
          id: req.params.id
        }
      }
    )
      .then(dbProductData => {
        if (!dbProductData) {
          res.status(404).json({ message: 'No product found with this id' });
          return;
        }
        res.json(dbProductData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  router.delete('/:id', (req, res) => {
    Post.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(dbProductData => {
        if (!dbProductData) {
          res.status(404).json({ message: 'No product found with this id' });
          return;
        }
        res.json(dbProductData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });


module.exports = router;