import joi from 'joi'

const createMovieValidator = async (req, res, next) => {
  try {
    const createMovieSchema = joi.object({
      title: joi.string().required(),
      director: joi.string().required(),
      producer: joi.string().required(),
      release_date: joi.date().max('now').required(),
      genre: joi.string().required(),
      duration: joi.number().positive().integer().invalid(0).required(),
      cast: joi.string().required(),
      sinopsis: joi.string().required(),
      rating: joi.number().positive().integer().invalid(0).less(5).required(),
      poster: joi.string().required()
    })

    await createMovieSchema.validateAsync(req.body)
  } catch (error) {
    res.status(400).json({
      msg: 'Validation error by creating a movie',
      error
    })
  }
}

export default createMovieValidator
