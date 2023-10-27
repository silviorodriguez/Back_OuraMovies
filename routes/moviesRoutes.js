const express = require ('express')
const router = express.Router()
const { getMovies, setMovie, updateMovie, deleteMovie } = require ('../controllers/moviesControllers')
const { protect } = require('../middleware/authMiddleware')

router.get('/', protect, getMovies)
router.post('/', protect, setMovie)
router.put('/:id', protect, updateMovie)
router.delete('/:id', protect, deleteMovie)

module.exports = router