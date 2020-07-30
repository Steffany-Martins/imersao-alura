import React from "react";
import { Link } from "react-router-dom";
import logo from "./../../assets/Logo.png";
import Button from "../Button";
import "./styles.css";

const Menu = () => {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={logo} alt="Home KpopFlix" title="Home" />
      </Link>

      <Button as={Link} to="/cadastro/categoria">
        Novo Vídeo
      </Button>
    </nav>
  );
};
export default Menu;
