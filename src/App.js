import React from 'react';
import {Link, Outlet} from "react-router-dom"
import Wallet from "./Wallet"
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Link className="header-link" to="/trivia">Trivia</Link>
        <Link className="header-link" to="/shop">Shop</Link>
        <Link className="header-link" to="/closet">Closet</Link>
        <Wallet/>
      </header>
      <Outlet/>
    </div>
  );
}

export default App;
