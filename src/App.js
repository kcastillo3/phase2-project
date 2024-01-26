import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes and fix import for Route
import Header from './components/Header'; 
import HomePage from './components/HomePage';
import CollectionPage from './components/CollectionPage';
import SubmitArtPage from './components/SubmitArtPage';
import Footer from './components/Footer'; 
import './App.css'; 

function App() {
return (
  <Router>
    <div className="App">
      <Header />
      <Routes> {/* Use Routes for defining Route components */}
        <Route exact path="/" element={<HomePage />} /> {/* Use element prop instead of component */}
        <Route path="/collection" element={<CollectionPage />} />
        <Route path="/submit-art" element={<SubmitArtPage />} />
      </Routes>
      <Footer />
    </div>
  </Router>
);
}

export default App;


