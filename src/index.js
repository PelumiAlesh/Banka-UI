import React from "react";
import ReactDOM from "react-dom";

import "./app.css";

const App = () => {
  return <div>
    <p>Hello React,Webpack 4 & Babel 7!</p>
    <img src={ require('./public/Screenshot 2019-07-06 at 1.40.16 PM.png')}></img>
    </div>;
};

ReactDOM.render(<App />, document.querySelector("#root"));