const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const postRoutes = require('./post-routes');
const businessRoutes= require('./business-routes')
const categoryRoutes = require('./category_routes.js');
// const commentRoutes = require('./comment-routes');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/businesses', businessRoutes);
router.use('/categories', categoryRoutes);
// router.use('/comments', commentRoutes);

module.exports = router;


