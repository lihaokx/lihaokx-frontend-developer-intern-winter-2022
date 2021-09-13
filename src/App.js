import logo from './logo.svg';
import './App.css';
import NasaApi from './components/NasaApi';
import { useState } from 'react';
import Header from './components/Header';
function App() {
  
  return (
    <div className="App container">
      <div>
        <Header/>
      </div>
      <div className = "row justify-content-center" >
        <div className = "col-10">
          
          <NasaApi/>
        </div>
      </div>
    </div>
  );
}

export default App;
