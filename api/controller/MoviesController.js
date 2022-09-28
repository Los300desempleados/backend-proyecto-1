import { Movie } from 'models/index.js';

const create = async (req, res) => {
    try {
        const movie = await Movie.create(req.body) 
        return res.json({
            msg: 'Película creado con éxito',
            movie
        })

    } catch (error) {
        rest.status(500).json({
            msg: 'Error al crear película',
            error
        })
    }
}

export { create }