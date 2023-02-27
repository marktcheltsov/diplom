const router = require('express').Router();

const userRouter = require('./userRoutes');

const moviesRouter = require('./moviesRoutes');

router.use('/users', userRouter);
router.use('/movies', moviesRouter);

const routers = router;
module.exports = routers;
