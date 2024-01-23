import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header'; 
import HomePage from './components/HomePage/HomePage';
import CollectionPage from './components/CollectionPage/CollectionPage';
import SubmitArtPage from './components/SubmitArtPage/SubmitArtPage';
import Footer from './components/Footer/Footer'; 
import './App.css'; 

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/collection" component={CollectionPage} />
          <Route path="/submit-art" component={SubmitArtPage} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

