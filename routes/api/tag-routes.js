const router = require('express').Router();
const { Tag, Product, Product} = require('../../models');

// GET /api/tags
router.get('/', (req, res) => {
    // Access our Tag model and run .findAll() method)
    Tag.findAll({
        attributes: ['id', 'tag_name'],
        include: [
          {
            model: Product,
            attributes: ['product_name']
          }
        ]
    })
      .then(dbTagData => res.json(dbTagData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  // GET /api/Tag/1
router.get('/:id', (req, res) => {
    Tag.findOne({
      where: {
        id: req.params.id
      },
        attributes: ['id', 'tag_name'],
        include: [
          {
            model: Product,
            attributes: ['product_name']
          }
        ]
    })
      .then(dbTagData => {
        if (!dbTagData) {
          res.status(404).json({ message: 'No tag found with this id' });
          return;
        }
        res.json(dbTagData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      })
  });

  // POST /api/tag
router.post('/', (req, res) => {
    // expects {username: 'Lernantino', email: 'lernantino@gmail.com', password: 'password1234'}
    Tag.create({
      tag_name: req.body.tag_name,
    })
      .then(dbTagData => res.json(dbTagData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  // PUT /api/tag/1
router.put('/:id', (req, res) => {
  
    // if req.body has exact key/value pairs to match the model, you can just use `req.body` instead
    Tag.update(req.body, {
      where: {
        id: req.params.id
      }
    })
      .then(dbTagData => {
        if (!dbTagData[0]) {
          res.status(404).json({ message: 'No tag found with this id' });
          return;
        }
        res.json(dbTagData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  // DELETE /api/tag/1
router.delete('/:id', (req, res) => {
    Tag.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(dbTagData => {
        if (!dbTagData) {
          res.status(404).json({ message: 'No tag found with this id' });
          return;
        }
        res.json(dbTagData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  module.exports = router;