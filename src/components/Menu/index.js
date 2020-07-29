import React from "react";
import logo from "./../../assets/Logo.png";
import Button from "../Button";
import "./styles.css";

const Menu = () => {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={logo} alt="Home logo-TechFlix" />
      </a>

      <Button as="a" href="/">
        Novo Vídeo
      </Button>
    </nav>
  );
};
export default Menu;
