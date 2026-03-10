const books = [
  {title: "Leviathan Wakes", publishingYear: 2011, authorIds: ["0","1"], genreId: ["0"]},
  {title: "Game of Thrones", publishingYear: "1995"},
  {title: "Book 3", publishingYear: "2000"},
]

exports.all = books

exports.add = (book) => {
  books.push(book);
}

exports.edit = (book) => {
  books[book.id] = book;
}

exports.get = (idx) => {
  return books[idx];
}

exports.update = (book) => {
  books[book.id] = book;
}


exports.upsert = (book) => {
   if (book.authorIds && !Array.isArray(book.authorIds)) {
    book.authorIds = [book.authorIds];
  }
  if (book.id) {
    exports.update(book);
  } else {
    exports.add(book);
  }
}

