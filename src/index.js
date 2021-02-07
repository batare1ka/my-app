import React from 'react';
import store from "./redux/redux-store"
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route } from "react-router-dom";


let rerenderEntireTree = () => {
    ReactDOM.render(
      <BrowserRouter>
        <React.StrictMode>
          
          <App 
          store={store}/>
         
        </React.StrictMode>
      </BrowserRouter>,
      document.getElementById('root')
    );
  }
  rerenderEntireTree();
store.subscribe(rerenderEntireTree);





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
