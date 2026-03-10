const genres = [
  { name: 'Fiction' },
  { name: 'Non-Fiction' },
  { name: 'Science Fiction' },
  { name: 'Fantasy' },
  { name: 'Mystery' },
  { name: 'Biography' }
];

exports.all = genres

exports.get = (idx) => {
  return genres[idx];
}

exports.add = (genre) => {
  genres.push(genre);
}

exports.update = (genre) => {
  genres[genre.id] = genre;
}

exports.edit = (genre) => {
  genres[genre.id] = genre;
}

exports.upsert = (genre) => {
  if (genre.id) {
    exports.update(genre);
  } else {
    exports.add(genre);
  }
}