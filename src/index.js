import React from 'react';
import ReactDOM from 'react-dom';
import firebase from "firebase/app";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

firebase.initializeApp({
    apiKey: "AIzaSyAXe0rjDTHgcoUSsP9u5NtiwNf92VL_oI4",
    authDomain: "post-visualize-development.firebaseapp.com",
    databaseURL: "https://post-visualize-development.firebaseio.com",
    projectId: "post-visualize-development",
    storageBucket: "post-visualize-development.appspot.com",
    messagingSenderId: "114314763008",
    appId: "1:114314763008:web:5e3883a149b20b86"
})


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
