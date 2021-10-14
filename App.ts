// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module './logo.svg' or its correspondi... Remove this comment to see the full error message
import logo from './logo.svg';
import './App.css';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React from "react";
import firebase from "firebase";
import { VictoryChart, VictoryLine } from 'victory';
// @ts-expect-error ts-migrate(6142) FIXME: Module './NavBar' was resolved to '/Users/vaishu/D... Remove this comment to see the full error message
import NavBar from "./NavBar"

export default function App() {
  const firebaseApp: firebase.app.App = firebase.apps[0];

  return (
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'div'.
    <div>
    <NavBar>
    <VictoryChart>
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'style'.
    <VictoryLine style = {{
    data: { stroke: "#c43a31" },
    parent: { border: "1px solid #ccc" }
  }
}
// @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'data'.
data = {
  // @ts-expect-error ts-migrate(2464) FIXME: A computed property name must be of type 'string',... Remove this comment to see the full error message
  [
    // @ts-expect-error ts-migrate(2695) FIXME: Left side of comma operator is unused and has no s... Remove this comment to see the full error message
    { x: 1, y: 2 },
    { x: 2, y: 3 },
    { x: 3, y: 5 },
    { x: 4, y: 4 },
    { x: 5, y: 7 }
  ]}
  />
  </VictoryChart>
  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'code'.
  < code >
  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'pre'.
  <pre>{ JSON.stringify(firebaseApp.options, null, 2) } < /pre>
  < /code>
  < /div>
    )};

