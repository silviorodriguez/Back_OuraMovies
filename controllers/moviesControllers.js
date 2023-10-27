const asyncHandler = require ('express-async-handler')
const Movie = require('../models/moviesModel')

const getMovies = asyncHandler(async (req, res) =>{
    const movies = await Movie.find(req.user.body)
    res.status(200).json(movies)

})

const setMovie = asyncHandler(async (req, res) =>{
    if(!req.body.texto) {
        res.status(400)
        throw new Error('Por favor teclee una pelicula')
    }

    const movie = await Movie.create(req.body)
    res.status(201).json(movie)
})

const updateMovie = asyncHandler(async (req, res) =>{

    const movie = await Movie.findById(req.params.id)
    if(!movie) {
        res.status(400)
        throw new Error('La pelicula no fue encontrada')
    }

    // vamos a verificar que la tarea pertenezca al ausuario logeado
    if(movie.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error('Acceso no Autorizado')
    } else {
        const updateMovie = await Movie.findByIdAndUpdate(req.params.id, req.body, { new: true})
        res.status(200).json(updateMovie)
    }
})

const deleteMovie = asyncHandler(async (req, res) =>{

    const movie = await Movie.findById(req.params.id)
    if(!movie) {
        res.status(400)
        throw new Error('La pelicula no fue encontrada')
    }

    if(movie.user.toString() !== req.user.id){
        res.status(401)
        throw new Error('Acceso no autorizado')
    } else {
        movie.deleteOne()
        res.status(200).json({ id: movie._id })
    }

   
})

module.exports = {
    getMovies,
    setMovie,
    updateMovie,
    deleteMovie
}