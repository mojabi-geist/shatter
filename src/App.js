import React from 'react';
import Home from './components/main-components/Home';
import Nav from './components/main-components/Nav';
import Footer from './components/main-components/Footer';
import Ladder from './components/main-components/Ladder';
import './App.css';



function App() {
  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <body>
        <Home />
        <Ladder />
        <Footer />
      </body>

    </div>
  );
}

export default App;
