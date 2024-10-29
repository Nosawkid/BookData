require("dotenv").config();
const express = require("express");
const app = express();
app.use(express.json());

app.use(express.static("public"));

const books = [
  {
    id: 1,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
  },
  {
    id: 2,
    title: "1984",
    author: "George Orwell",
    year: 1949,
  },
  {
    id: 3,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
  },
];

app.get("/", (req, res) => {
  res.send("<h1>Welcome to Books App</h1>");
});

app.get("/books", (req, res) => {
  res.status(200).json(books);
});

app.get("/books/:id", (req, res) => {
  const id = Number(req.params.id);
  const book = books.find((book) => book.id === id);
  if (book) {
    res.send(book);
  } else {
    res.send(`<h3 style="color:red;">No Books with id:${id} was found</h3>`);
  }
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running at ${port}`);
});
