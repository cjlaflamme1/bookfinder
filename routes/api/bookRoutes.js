const router = require('express').Router();
const booksController = require('../../controllers/booksController');

// This will match with "/api/books"
router.route('/')
// input route requests and actions here. 



// This will match with "/api/books/:id"
router.route('/:id')
// route requests and actions will go here. 


module.exports = router;