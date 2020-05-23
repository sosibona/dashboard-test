import React from "react";
import Header from "./header/Header";
import UserProfile from "./user/UserProfile";

const Profile = () => {
  return (
    <div className="dashboard">
      <Header />
      <hr className="line" />
      <UserProfile />
    </div>
  );
};

export default Profile;
