const router = require("express").Router();
const bookController = require("../controllers/bookControllers");

// we are using express router, i couldn't get normal server routes to work..
router.route("/api/books")

// if the server recieves a request at /api/books it will either use create function from the controller, or findAall for a get request
    .post(bookController.create)
    .get(bookController.findAll)

// another server route for individual book ids to be deleted
router.route("/api/books/:id")
    .delete(bookController.delete);

module.exports = router;
    
    
