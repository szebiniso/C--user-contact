import React from "react";
import "./Header.css";
import { useNavigate } from "react-router";

const Header = () => {
  const navigate = useNavigate();
  const nav = () => {
    navigate("/");
  };
  return (
    <header>
      <h1 className="header" onClick={nav}>
        MyContacts
      </h1>
    </header>
  );
};

export default Header;