import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.scss';
import Book from './components/Book';
import BooksPage from './pages/BooksPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/BooksPage" element={<BooksPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
