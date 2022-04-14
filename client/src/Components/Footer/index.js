import React from "react";
import { FooterComponent } from "./styles";
import Logo from "../../assets/images/logo.svg";
import ScrollToTopButton from "../ScrollToTopButton";

export default function Footer() {
  function handleScrollToTop() {
    window.scrollTo(0, 0);
  }

  return (
    <>
      <FooterComponent>
        <div className="text-container">
          <img src={Logo} alt="" />
          <small>
            2022 getBooks. Desenvolvido com ♥ por{" "}
            <a
              href="https://www.linkedin.com/in/soaresmilton/"
              target="_blank"
              rel="noreferrer"
            >
              Milton Soares
            </a>{" "}
            | Contribua com o projeto
          </small>
        </div>
        <ScrollToTopButton scrollToTop={handleScrollToTop} />
      </FooterComponent>
    </>
  );
}
