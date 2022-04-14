import React from "react";
import { Link } from "react-router-dom";

import AutNavBar from "../../Components/AutNavBar";
import Footer from "../../Components/Footer";
import { TitleContainer } from "../Home/style";
import {
  ContactFormContainer,
  Input,
  InputGroup,
  InputSubmit,
  LabelComponent,
  ErrorSpan,
} from "../../Components/ContactForm/styles";
import PageTitle from "../../Components/PageTitle";
import Hero from "../../Components/Hero";
import StyledSpan from "../../Components/StyledSpan";

import LoginHero from "../../assets/images/login-hero.svg";
import LoginIcon from "../../assets/icons/login-icon.svg";


import {
  LoginContainer,
  Container,
  ShowPasswordCheckbox,
  ShowPassword,
  LinksContainer,
} from "./styles";

import { useForm } from "react-hook-form";

function Login() {
  const showPassword = () => {
    let passwordInput = document.getElementById("password");

    passwordInput.type === "password"
      ? (passwordInput.type = "text")
      : (passwordInput.type = "password");
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <Container>
        <AutNavBar />

        <TitleContainer>
          <PageTitle id="login" partOne="Acesse sua " styledTitle="conta" />
        </TitleContainer>

        <LoginContainer>
          <Hero src={LoginHero} alt={"Login Hero image"} />

          <div>
            <ContactFormContainer onSubmit={handleSubmit(onSubmit)}>
              <InputGroup>
                <LabelComponent htmlFor="email" name={"email"}>
                  Email*
                </LabelComponent>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Informe seu e-mail cadastrado "
                  {...register("email", {
                    required: "Informe seu endereço e-mail",
                  })}
                />

                <ErrorSpan>{errors.email?.message}</ErrorSpan>
              </InputGroup>

              <InputGroup>
                <LabelComponent htmlFor="password" name={"password"}>
                  Senha*
                </LabelComponent>
                <Input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Informe sua senha"
                  {...register("password", {
                    required: "Informe sua senha para efetuar o login",
                  })}
                />

                <ErrorSpan>{errors.password?.message}</ErrorSpan>

                <ShowPassword>
                  <ShowPasswordCheckbox
                    type="checkbox"
                    id="show-password"
                    onClick={showPassword}
                  />{" "}
                  <label htmlFor="show-password">Show password</label>
                </ShowPassword>
              </InputGroup>

              <InputGroup>
                <InputSubmit type="submit">
                  <StyledSpan text={"LOGIN"}/>
                  <Hero src={LoginIcon} alt="" />
                </InputSubmit>
              </InputGroup>
            </ContactFormContainer>

            <LinksContainer>
              <Link to="/forgotpassword" className="link">Esqueceu sua senha?</Link>

              <Link to="/createuser" className="link">
                Não possui uma conta? <StyledSpan text={"Cadastre-se"}>
                  
                </StyledSpan>
              </Link>
            </LinksContainer>
          </div>
        </LoginContainer>

        <Footer />
      </Container>
    </>
  );
}

export default Login;
