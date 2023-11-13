import './App.scss';
import Homepage from './pages/Homepage';
import Nav from './components/Nav/Nav';
import React from 'react';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
        <Nav />
        <Homepage />
        <Footer/>
    </div>
  );
}

export default App;
