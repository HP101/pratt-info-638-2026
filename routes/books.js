const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  const books = [
    "Book 1", "Book 2", "Book 3"
  ]
  res.render('books/index', { title: 'BookedIn || Books', books: books });
});

module.exports = router;

