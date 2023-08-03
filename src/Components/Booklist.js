import React from 'react';

const BookList = ({ favorites, addToFavorites, removeFromFavorites, openModal, books }) => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Book List</h1>
      <div className="grid grid-cols-3 gap-4">
        {books.map((book) => (
          <div key={book.id} className="bg-white p-4 rounded-md shadow-md">
            <img
              src={book.image_url}
              alt={book.title}
              className="w-32 h-40 mb-4 rounded-md object-cover"
            />
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold">{book.title}</h2>
                <p className="text-gray-600">{book.author}</p>
              </div>
              <div>
                <button
                  className="mr-2 text-blue-600"
                  onClick={() => openModal(book)}
                >
                  Details
                </button>
                {favorites.some((favBook) => favBook.id === book.id) ? (
                  <button
                    className="text-red-600"
                    onClick={() => removeFromFavorites(book)}
                  >
                    Remove from Favorites
                  </button>
                ) : (
                  <button
                    className="text-green-600"
                    onClick={() => addToFavorites(book)}
                  >
                    Add to Favorites
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookList;
