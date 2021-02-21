import './App.css';
import Content from './Content';
import Header from './Header';
import LeftSidebar from './LeftSidebar';
import './leftsidebar.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Footer from './Footer';
import Home from './Home';

// import Home from './Home';

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/datapreprocessing">
            <Header />
            <LeftSidebar />
            <Content />
            <Footer />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
