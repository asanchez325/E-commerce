const router = require('express').Router();

const categoryRoutes = require('./category-routes.js');
const productRoutes = require('./product-routes.js');
const tagRoutes = require('./tag-routes.js');
const productTagRoutes = require('./productTag-routes.js');

router.use('/category', categoryRoutes);
router.use('/product', productRoutes);
router.use('/tag', productRoutes);
router.use('/productTag', productRoutes);

module.exports = router;