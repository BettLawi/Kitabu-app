// src/components/BookDetails.js
import React from 'react';
import { Link, useParams } from 'react-router-dom';

const BookDetails = ({ books }) => {
  const { bookId } = useParams();
  const book = books.find((book) => book.id === parseInt(bookId));

  if (!book) {
    return <p>Book not found.</p>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">{book.title}</h1>
      <p>Author: {book.author}</p>
      <p>Description: {book.description}</p>
      <Link to="/favorites">Go Back to Favorites</Link>
    </div>
  );
};

export default BookDetails;
