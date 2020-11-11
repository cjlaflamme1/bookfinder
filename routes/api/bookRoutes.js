const router = require('express').Router();
const booksController = require('../../controllers/booksController');

// This will match with "/api/books"
router.route('/')
// input route requests and actions here. 
.get(booksController.findAll)
.post(booksController.create);

// This will match with "/api/books/:id"
router.route('/:id')
// route requests and actions will go here.
.delete(booksController.remove)



module.exports = router;