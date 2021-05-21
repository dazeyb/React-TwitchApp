import React, { Component } from "react";

import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";

import "./App.css";

/* function App() {
  const user = {
    username: "Dalton",
    avatar:
      "https://static-cdn.jtvnw.net/jtv_user_pictures/0ed35a26-2358-48d7-a03d-a7bf4b08a64b-profile_image-70x70.png",
  };

  return (
    <div className='App'>
      <Nav user={user} />
      <Home user={user} />
    </div>
  );
} */

class App extends React.Component {
  state = {
    user: {
      username: "Dalton",
      avatar:
        "https://static-cdn.jtvnw.net/jtv_user_pictures/0ed35a26-2358-48d7-a03d-a7bf4b08a64b-profile_image-70x70.png",
    },
  };

  logout = () => {
    // how we change state
    this.setState({
      user: null,
    });
  };

  login = () => {
    this.setState({
      user: {
        username: "Dalton",
        avatar:
          "https://static-cdn.jtvnw.net/jtv_user_pictures/0ed35a26-2358-48d7-a03d-a7bf4b08a64b-profile_image-70x70.png",
      },
    });
  };

  render() {
    const { user } = this.state;
    return (
      <div className='App'>
        <Nav user={user} logout={this.logout} login={this.login} />
        <Home user={user} />
      </div>
    );
  }
}

export default App;
