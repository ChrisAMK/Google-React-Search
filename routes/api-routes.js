const router = require("express").Router();
const bookController = require("../controllers/bookControllers");

router.route("/api/books")

    .post(bookController.create)
    .get(bookController.findAll)

router.route("/api/books/:id")
    .delete(bookController.delete);


module.exports = router;
    
    
