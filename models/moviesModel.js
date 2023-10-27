const { boolean, date, string } = require('joi')
const mongoose = require ('mongoose')

const movieSchema = mongoose.Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },

    adult: {
        type: Boolean,
        required: [true, 'Por favor teclee si la Pelicula es para adultos']
    },

    backdrop_path: {
        type: String      
    },

    genre_ids: {
        type: [String],
        required: [true, 'Por favor los generos de id']
    },

    original_language: {
        type: String
    },

    original_title: {
        type: String,
        required: [true, 'Por favor ingresa el titulo de la pelicula']
    },

    overview: {
        type: String,
        required: [true, 'Por favor ingresa el resumen de la pelicula']
    },

    popularity: {
        type: Number
    },

    poster_path: {
        type: String,
        required: [true, 'Por favor ingresa una portada de la pelicula']
    },

    release_date: {
        type: Date
    },

    title: {
        type: String,
        required: [true, 'Por favor ingresa el titulo de la pelicula'],
        unique: true
    },

    video: {
        type: Boolean,
    },

    vote_average: {
        type: Number,
    },

    vote_count:{
        type: Number,
    },
    texto:{
        type: String
    }
   
}, {
    timestamps: true
}) 

module.exports = mongoose.model('Movie', movieSchema)