import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import BookList from './Components/Booklist';
import Favorites from './Components/Favorites';
import Footer from './Components/Footer';
import Modal from 'react-modal';
import BookDetails from './Components/BookDetail';
import Home from './Components/Home';

const App = () => {
  const [favorites, setFavorites] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('https://example-data.draftbit.com/books?_limit=10')
      .then((response) => response.json())
      .then((data) => setBooks(data))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    // Set the app element for the modal
    Modal.setAppElement('#root');
  }, []);

  const addToFavorites = (book) => {
    setFavorites((prevFavorites) => {
      if (!prevFavorites.some((favBook) => favBook.id === book.id)) {
        return [...prevFavorites, book];
      }
      return prevFavorites;
    });
  };

  const removeFromFavorites = (book) => {
    setFavorites((prevFavorites) => {
      return prevFavorites.filter((favBook) => favBook.id !== book.id);
    });
  };

  const openModal = (book) => {
    setSelectedBook(book);
  };

  const closeModal = () => {
    setSelectedBook(null);
  };

  return (
    <Router>
      <nav className="bg-black p-4 text-white max-md">
        <ul className="container mx-auto flex justify-between">
          <li>
            <Link to="/" className='text-lg font-semibold'>Home</Link> 
          </li>
          <li>
            <Link to="/booklist" className='mr-4'>BookList</Link>
          </li>
          <li>
            <Link to="/favorites">Favorites ({favorites.length})</Link>
          </li>
        </ul>
      </nav>
      <div className="container mx-auto px-4 m">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/booklist"
            element={(
              <BookList
                favorites={favorites}
                addToFavorites={addToFavorites}
                removeFromFavorites={removeFromFavorites}
                openModal={openModal}
                books={books} // Pass the books data to BookList
              />
            )}
          />
          <Route
            path="/favorites"
            element={<Favorites favorites={favorites} />}
          />
          <Route
            path="/book/:bookId"
            element={<BookDetails books={books} />} // Pass the books data to BookDetails
          />
        </Routes>
      </div>
      <Footer />
      {/* Modal */}
      <Modal
        isOpen={!!selectedBook}
        onRequestClose={closeModal}
        contentLabel="Book Details"
      >
        {selectedBook && (
          <div>
            <h2 className="text-2xl font-bold mb-2">
              {selectedBook.title} - {selectedBook.author}
            </h2>
            <img
              src={selectedBook.image_url}
              alt={selectedBook.title}
              className="w-40 h-40 mb-2 rounded-md object-cover"
            />
            <p>{selectedBook.description}</p>
            <div className="mt-4">
              {favorites.some((favBook) => favBook.id === selectedBook.id) ? (
                <button
                  className="mr-4 text-red-600"
                  onClick={() => removeFromFavorites(selectedBook)}
                >
                  Remove from Favorites
                </button>
              ) : (
                <button
                  className="mr-4 text-green-600"
                  onClick={() => addToFavorites(selectedBook)}
                >
                  Add to Favorites
                </button>
              )}
              <button
                className="text-blue-600"
                onClick={closeModal}
              >
                Go Back
              </button>
            </div>
          </div>
        )}
      </Modal>
    </Router>
  );
};

// const Home = () => {
//   return (
//     <div>
//       <h1 className="text-3xl font-bold mb-4">Welcome to Kitabu App</h1>
//       <p>
//         This is the home page of the app. You can use the navigation bar above to
//         explore the BookList and Favorites.
//       </p>
//     </div>
  // );
// };

export default App;
