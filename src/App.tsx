import logo from './logo.svg';
import './App.css';
import React from "react";
import firebase from "firebase";
import { VictoryChart, VictoryLine } from 'victory';
import NavBar from "./NavBar"

function App() {
  const firebaseApp: firebase.app.App = firebase.apps[0];

  const data =  [
      { x: 1, y: 2 },
      { x: 2, y: 3 },
      { x: 3, y: 5 },
      { x: 4, y: 4 },
      { x: 5, y: 7 }
  ];
  const viclinestyle = {
    data: { stroke: "#c43a31" },
    parent: { border: "1px solid #ccc" }
  };

  return (
    <div>
      <NavBar/>
      <VictoryChart>
        <VictoryLine style={viclinestyle} data={data}/>
      </VictoryChart>
    </div>
  );


}

export default App;