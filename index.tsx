// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React from 'react';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
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
  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  <React.StrictMode>
    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// @ts-expect-error ts-migrate(2554) FIXME: Expected 1 arguments, but got 0.
reportWebVitals();
