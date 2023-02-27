const router = require('express').Router();

const { celebrate, Joi } = require('celebrate');

const { saveMovie, deleteMovie, getMovies } = require('../controllers/movies');

router.get('/', getMovies);

router.post('/', celebrate({
  body: Joi.object().keys({
    country: Joi.string().required(),
    director: Joi.string().required(),
    duration: Joi.number().required(),
    year: Joi.string().required(),
    description: Joi.string().required(),
    image: Joi.string().required(),
    trailerLink: Joi.string().required(),
    thumbnail: Joi.string().required(),
    owner: Joi.string().required(),
    movieId: Joi.string().required(),
    nameRU: Joi.string().required(),
    nameEN: Joi.string().required(),
  }),
}), saveMovie);

router.delete('/:id', deleteMovie);

const moviesRouter = router;
module.exports = moviesRouter;
