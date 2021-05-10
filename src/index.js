import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { Board } from "./Components/Board";
import { Scoreboard } from "./Components/Scoreboard";
import "./Styles/Board.css";
import "./Styles/Box.css";
import "./Styles/Buttons.css";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Route exact path="/" component={Scoreboard} />
          <Route path="/board" component={Board} />
        </BrowserRouter>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
