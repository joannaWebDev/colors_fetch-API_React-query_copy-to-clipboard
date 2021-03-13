import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Colors from './pages/Colors';

import './App.css';

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div>
        <Header />

        <Route path="/" exact component={Home} />
        <Route path="/colors" exact component={Colors} />

        <Footer />
      </div>
    </Router>
  );
};

export default App;
