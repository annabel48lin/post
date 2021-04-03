import logo from './logo.svg';
import './App.css';
import React from "react";
import firebase from "firebase";
import {VictoryChart, VictoryLine} from 'victory';

export default function App(){
    const firebaseApp = firebase.apps[0];
    return(
        <div>
          <VictoryChart>
              <VictoryLine style={{
                  data: { stroke: "#c43a31" },
                  parent: { border: "1px solid #ccc"}
              }}
              data={[
                  { x: 1, y: 2 },
                  { x: 2, y: 3 },
                  { x: 3, y: 5 },
                  { x: 4, y: 4 },
                  { x: 5, y: 7 }
              ]}
              />
          </VictoryChart>
          <code>
            <pre>{JSON.stringify(firebaseApp.options, null, 2)}</pre>
          </code>
        </div>
    )};

