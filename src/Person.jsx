import React, { Component } from "react";
export class Person extends Component {
  state = {
    timer: 0,
  };
  componentDidMount = () => {
    this.intervalId = setInterval(() => {
      this.setState({ timer: this.state.timer + 1 });
    }, 1000);
  };

  render() {
    const { person } = this.props;
    const { fullName, imgSrc, profession, bio } = person;
    return (
      <div style={{ padding: "15px" }}>
        <img
          src={imgSrc}
          alt="profile photo"
          style={{ width: "30%", borderRadius: "60px", textAlign: "center" }}
        />
        <h2
          style={{ textAlign: "start", color: "#009966", fontStyle: "italic" }}
        >
          Name:
        </h2>
        <p style={{ textAlign: "start", fontSize: "large" }}>{fullName}</p>
        <h2
          style={{ textAlign: "start", color: "#009966", fontStyle: "italic" }}
        >
          Biographie:
        </h2>
        <p style={{ textAlign: "start", fontSize: "large" }}>{bio}</p>
        <h2
          style={{ textAlign: "start", color: "#009966", fontStyle: "italic" }}
        >
          Profession:
        </h2>
        <p style={{ textAlign: "start", fontSize: "large" }}>{profession}</p>
        <div>
          <h2>{this.state.timer}</h2>
        </div>
      </div>
    );
  }
}

export default Person;
