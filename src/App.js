import { Component } from "react";
import "./App.css";
import Person from "./Person";
import pro from "./pro.jpg";
export class App extends Component {
  state = {
    shows: false,
    person: {
      fullName: "Tej Oumayma",
      bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      imgSrc: pro,
      profession: "Student",
    },
  };

  toggleshows = () => this.setState({ shows: !this.state.shows });

  render() {
    return (
      <div className="App">
        <button className="btn" onClick={this.toggleshows}>
          Shows profile
        </button>
        {this.state.shows && <Person person={this.state.person} />}
      </div>
    );
  }
}

export default App;
