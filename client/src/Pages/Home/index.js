import React from "react";
import { Link } from "react-router-dom";

import hero from "../../assets/images/hero.svg";
import ManifestoHero from "../../assets/images/manifest-hero.svg";
import LoginIcon from "../../assets/icons/login-icon.svg";
import SearchIcon from "../../assets/icons/search-icon.svg";

import InitNavBar from "../../Components/InitNavBar";
import Hero from "../../Components/Hero";
import Buttons from "../../Components/Buttons";
import Division from "../../Components/Division";
import PageTitle from "../../Components/PageTitle";
import ContactForm from "../../Components/ContactForm";
import Footer from "../../Components/Footer";
import StyledSpan from "../../Components/StyledSpan";

import {
  SectionsContainer,
  ExploreContainer,
  TextContainer,
  Texts,
  ButtonsContainer,
  TitleContainer,
  ManifestTextContainer,
  Banner,
} from "./style";

export default function Home() {
  return (
    <>
      <InitNavBar />
      <SectionsContainer>
        <ExploreContainer>
          <TextContainer>
            <Texts>
              <PageTitle
                partOne={"Explore seus"}
                styledTitle={" livros "}
                partTwo={"favoritos"}
                id="home"
              />
              <p>
                Busque informações rápidas de seus livros favoritos a qualquer
                hora e lugar com o <StyledSpan text={"getBooks"} />. Uma
                biblioteca digital, open-source, feita para ajudar quem gosta de
                leitura.
              </p>
              <p>
                Cadastre-se na plataforma e comece a contribuir agora mesmo.
              </p>
            </Texts>

            <ButtonsContainer>
              <Link to="/login">
                <Buttons description="Faça Login" icon={LoginIcon} className="right-button" />
              </Link>

              <Link to="/bookslist">
                <Buttons description="Explorar Livros " icon={SearchIcon} />
              </Link>
            </ButtonsContainer>
          </TextContainer>
          <div className="hero-container">
            <Hero
              src={hero}
              alt={
                "Desenho de uma mulher lendo um livro sentada sobre três livros gigantes. A mulher tem cabelos pretos, pele parda. O livro que está lendo tem a capa branca."
              }
            />
          </div>
        </ExploreContainer>
      </SectionsContainer>
      <Division />

      <SectionsContainer>
        <TitleContainer>
          <PageTitle
            partOne={"Manifesto "}
            styledTitle={"GetBooks"}
            id="about"
          />
        </TitleContainer>
        <ManifestTextContainer>
          <TextContainer>
            <Texts>
              <p>
                O getBooks vai além de uma biblioteca online onde você pode
                encontrar os melhores resumos e reviews dos seus livros
                favoritos, ou daquele livro que você está em dúvida para
                comprar.
              </p>
              <br />
              <p>
                O getBooks é um hub que visa centralizar informações desses
                livros e poder contribuir com o incentivo direto na leitura de
                milhões de brasileiros.
              </p>
              <br />

              <p>
                Nosso intuito é construir uma API, open-source, robusta e
                consistente para servir como referência na distribuição de
                informação gratuita para outras aplicações, baseado na interação
                e participação entre leitores assídos que gostam de escrever
                sobre seus livros.
              </p>
              <br />

              <p>
                Convidamos a todos os interessados a participarem desse projeto.
                Seja contribuindo com a publicação de seu ponto de vista para
                determinado livro ou com o desenvolvimento da aplicação.
              </p>
              <br />

              <p>
                Acreditamos em tecnologia, inovação e conhecimento para seguir
                em frente e construir uma base sólida para o futuro mais
                consciente da comunidade. Faça parte ♥
              </p>
            </Texts>
          </TextContainer>
          <div className="hero-container">
            <Hero
              src={ManifestoHero}
              alt={
                "Desenho de uma mulher lendo um livro sentada sobre três livros gigantes. A mulher tem cabelos pretos, pele parda. O livro que está lendo tem a capa branca."
              }
            />
          </div>
        </ManifestTextContainer>
      </SectionsContainer>

      <Banner>
        <p>
          Conectamos leitura e amantes de tecnologia em um único espaço.
          Incentivando cultura, desenvolvimento e inovação.
        </p>
      </Banner>

      <SectionsContainer>
        <TitleContainer>
          <PageTitle
            partOne={"Entre em "}
            styledTitle={"contato"}
            id="contact"
          />
        </TitleContainer>

        <ContactForm />
      </SectionsContainer>

      <Footer />
    </>
  );
}
