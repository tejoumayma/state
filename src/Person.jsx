import React, { Component } from "react";
import pro from "./pro.jpg";
export class Person extends Component {
  state = {
    fullName: "Tej Oumayma",
    bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    imgSrc: pro,
    profession: "Student",
    timer: 0,
  };
  componentDidMount = () => {
    this.intervalId = setInterval(() => {
      this.setState({ timer: this.state.timer + 1 });
    }, 1000);
  };

  render() {
    return (
      <div style={{ padding: "15px" }}>
        <img
          src={this.state.imgSrc}
          alt="profile photo"
          style={{ width: "30%", borderRadius: "60px", textAlign: "center" }}
        />
        <h2
          style={{ textAlign: "start", color: "#009966", fontStyle: "italic" }}
        >
          Name:
        </h2>
        <p style={{ textAlign: "start", fontSize: "large" }}>
          {this.state.fullName}
        </p>
        <h2
          style={{ textAlign: "start", color: "#009966", fontStyle: "italic" }}
        >
          Biographie:
        </h2>
        <p style={{ textAlign: "start", fontSize: "large" }}>
          {this.state.bio}
        </p>
        <h2
          style={{ textAlign: "start", color: "#009966", fontStyle: "italic" }}
        >
          Profession:
        </h2>
        <p style={{ textAlign: "start", fontSize: "large" }}>
          {this.state.profession}
        </p>
        <div>
          <h2>{this.state.timer}</h2>
        </div>
      </div>
    );
  }
}

export default Person;
