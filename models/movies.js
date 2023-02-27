const mongoose = require('mongoose');

const { default: isURL } = require('validator/lib/isURL');

const movieSchema = new mongoose.Schema({

  country: {
    type: String,
    required: true,
  },
  director: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
    validate: {
      validator: (url) => isURL(url),
      message: (url) => `${url} не прошел валидацию`,
    },
  },
  trailerLink: {
    type: String,
    required: true,
    validate: {
      validator: (url) => isURL(url),
      message: (url) => `${url} не прошел валидацию`,
    },
  },
  thumbnail: {
    type: String,
    required: true,
    validate: {
      validator: (url) => isURL(url),
      message: (url) => `${url} не прошел валидацию`,
    },
  },
  owner: {
    type: String,
    required: true,
    select: false,
  },
  movieId: {
    type: String,
    required: true,
  },
  nameRU: {
    type: String,
    required: true,
  },
  nameEN: {
    type: String,
    required: true,
  },
}, { bufferCommands: false });

const movieModel = mongoose.model('movie', movieSchema);

module.exports = movieModel;
