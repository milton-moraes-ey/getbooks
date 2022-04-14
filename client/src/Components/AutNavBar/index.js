import React from "react";
import { ContainerNavBar, NavBar, Button } from "./styles";
import Hero from "../Hero";
import logo from "../../assets/images/logo.svg";
import { Link } from "react-router-dom";
import StyledSpan from "../StyledSpan";

function AutNavBar() {
  return (
    <>
      <ContainerNavBar>
        <NavBar>
          <div className="logo">
            <Link to="/">
              <Hero src={logo} alt={"GetBooks Logo"} />
            </Link>
          </div>

          <div className="links">
          <Link to="/">
              <span className="link">HOME</span>
            </Link>
            <Link to="/bookslist">
              <span className="link">LIVROS</span>
            </Link>
          </div>

          <div className="buttons">
            <Link to="/login">
              <Button>
                <StyledSpan text={"Login"} />
              </Button>
            </Link>

            <Link to="/createuser">
              <Button>
                <StyledSpan text={"Cadastrar"} />
              </Button>
            </Link>
          </div>
        </NavBar>
      </ContainerNavBar>
    </>
  );
}

export default AutNavBar;
