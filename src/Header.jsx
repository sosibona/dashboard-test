import React from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import user from "./img/user_default.png";

const Header = ({ userData }) => {
  return (
    <header className="header">
      <div className="user">
        <span className="user__name">
          Hello, {userData ? userData.name : "Guest"}
        </span>
        <img
          className="user__avatar"
          src={userData && userData.avatar ? userData.avatar : user}
          alt="user"
        />
      </div>
    </header>
  );
};

const mapState = (state) => {
  return { userData: state.userData };
};

Header.propTypes = {
  userData: PropTypes.object
}

Header.defaultProps = {
  userData: null,
};
export default connect(mapState)(Header);
