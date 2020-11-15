const db = require('../schemas/schemaIndex');

module.exports = {
    findAll: (req, res) => {
        db.Books.find(req.query).then((books) => {
            res.json(books)
        }).catch(err => res.json(err));
    },
    create: (req, res) => {
        db.Books.create(req.body).then((newBook) => {
            res.json(newBook)
        }).catch(err => res.json(err));
    }, 
    remove: (req, res) => {
        console.log(req.params);
        db.Books.findById({id: req.params.id}).then((book) => {
            book.remove();
        }).then((remainingData) => {
            res.json(remainingData);
        }).catch(err => res.json(err));
    },

}