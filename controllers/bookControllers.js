const db = require("../models");

module.exports = {
    create: function(req, res) {
        console.log(req.body)
        db.Book.create(req.body)
        .then(bookModel => res.json(bookModel))
        .catch(err => {
            console.log(err)
            res.status(422).json(err)
        });
    },

    findAll: function(req, res) {
        db.Book
        .find(req.query)
        .sort({ date: -1 })
        .then(bookModel => res.json(bookModel))
        .catch(err => {
            console.log(err)
            res.status(422).json(err)
        });
    },

    delete: function(req, res) {

        console.log(req.params)

        db.Book
        .findById({ _id: req.params._id })
        .then(deletedBook => deletedBook.remove())
        .then(deletedBook => res.json(deletedBook))
        .catch(err => {
            console.log(err)
            res.status(422).json(err)
        })
    }
}