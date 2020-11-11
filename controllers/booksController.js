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
    }
}