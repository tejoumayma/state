import { Component } from "react";
import "./App.css";
import Person from "./Person";
export class App extends Component {
  state = {
    shows: false,
  };
  toggleshows = () => this.setState({ shows: !this.state.shows });

  render() {
    return (
      <div className="App">
        <button className="btn" onClick={this.toggleshows}>
          Shows profile
        </button>
        {this.state.shows && <Person />}
      </div>
    );
  }
}

export default App;
