import React from "react";

const Header = (props) => (
  <div>
    <h1>{props.title}</h1>
    <h2>{props.subtitle}</h2>
  </div>
);

Header.defaultProps = {
  title: "Notes-App",
  subtitle: "Notes are very vital",
};

export default Header;
