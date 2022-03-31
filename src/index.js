import React from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Trivia from "./routes/trivia"
import Closet from "./routes/closet"
import Shop from "./routes/shop"


const rootElement = document.getElementById("root");
render(
<BrowserRouter>
  <Routes>
    <Route path="/" element={<App/>}>
      <Route path="trivia" element={<Trivia/>}/>
      <Route path="shop" element={<Shop/>}/>
      <Route path="closet" element={<Closet/>}/>
      <Route path="*" element={
        <div className="error">
          <img src={require("./images/dont-look.jpeg")} alt="hilarious meme"/>
          <p>Woah! You shouldnt be here!</p>
        </div>}/>
    </Route>
  </Routes>
</BrowserRouter>,
rootElement);


