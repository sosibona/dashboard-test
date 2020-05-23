import React, { Component } from "react";
import Header from "./Header";
import UserProfile from "./UserProfile";

class Profile extends Component {
  render() {
    return (
      <div className="dashboard">
        <Header />
        <hr className="line" />
        <UserProfile />
      </div>
    );
  }
}

export default Profile;
