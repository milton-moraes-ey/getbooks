import React from "react";
import { ContainerNavBar, NavBar, Button } from "./styles";
import logo from "../../assets/images/logo.svg";
import { Link } from "react-router-dom";

function InitNavBar() {
  return (
    <>
      <ContainerNavBar>
        <NavBar>
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="GetBooks Logo" />
            </Link>
          </div>

          <div className="links">
            <a href="#home" className="link">HOME</a>
            <a href="#about" className="link">SOBRE</a>
            <a href="#contact" className="link">CONTATO</a>
            <Link to="/bookslist">
              <span className="link">LIVROS</span>
            </Link>

          </div>

          <div className="buttons">
            <Link to="/login">
              <Button>
                <span>Login</span>
              </Button>
            </Link>

            <Link to="/createuser">
              <Button>
                <span>Cadastrar</span>
              </Button>
            </Link>
          </div>
        </NavBar>
      </ContainerNavBar>
    </>
  );
}

export default InitNavBar;
