import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.scss';
import BooksPage from './pages/BooksPage';
import CategoriesPage from './pages/CategoriesPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/BooksPage" element={<BooksPage />} />
          <Route path="/CategoriesPage" element={<CategoriesPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
