const express = require('express')
const bodyParser = require('body-parser')


const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: true }))

const indexRouter = require('./routes/index');
app.use('/', indexRouter);
var handlebars = require('express-handlebars').create();
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

const authorsRouter = require('./routes/authors');
app.use('/', indexRouter);
app.use('/authors', authorsRouter);

const booksRouter = require('./routes/books');
app.use('/', indexRouter);
app.use('/books', booksRouter);


// custom 404 page
app.use((req, res) => {
  res.type('text/html')
  res.status(404)
  res.send("<h1>404-This page is not found </h1>")
})

// custom 500 page
app.use((err, req, res, next) => {
  console.error(err.message)
  res.type('text/plain')
  res.status(500)
  res.send('500 - Server Error')
})

app.listen(port, () => console.log(
`Express started on http://localhost:${port}; ` +
`press Ctrl-C to terminate.`))

