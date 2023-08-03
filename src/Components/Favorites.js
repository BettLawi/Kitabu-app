import React from 'react';
import { Link } from 'react-router-dom';

const Favorites = ({ favorites }) => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">My Favorites</h1>
      {favorites.length === 0 ? (
        <p>You have no favorite books yet.</p>
      ) : (
        <ul>
          {favorites.map((book) => (
            <li key={book.id} className="text-xl mb-2">
              <Link to={`/book/${book.id}`}>
                <img
                  src={book.image_url}
                  alt={book.title}
                  className="w-20 h-20 mr-4 rounded-md object-cover"
                />
                <strong>{book.title}</strong> - {book.author}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Favorites;
