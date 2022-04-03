import React from "react";
import { FooterComponent } from "./styles";
import Logo from "../../assets/images/logo.svg"

export default function Footer() {
  return <FooterComponent>
    <img src={Logo} alt="" />
    <small>
    2022 getBooks. Desenvolvido com ♥ por <a href="https://www.linkedin.com/in/soaresmilton/" target="_blank" rel="noreferrer">Milton Soares</a> | Contribua com o projeto
    </small>
  </FooterComponent>;
}
