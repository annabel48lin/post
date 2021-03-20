import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {VictoryChart, VictoryLine} from 'victory';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

function App(){
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
      </div>
  )};

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
