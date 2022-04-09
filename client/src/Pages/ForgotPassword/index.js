import React from "react";

import { Container } from "./styles";

import InitNavBar from "../../Components/InitNavBar";
import PageTitle from "../../Components/PageTitle";
import { TitleContainer } from "../Home/style";
import {
  ContactFormContainer,
  InputGroup,
  Input,
  InputSubmit,
  ErrorSpan,
  LabelComponent,
} from "../../Components/ContactForm/styles";
import Hero from "../../Components/Hero";
import StyledSpan from "../../Components/StyledSpan";
import Footer from "../../Components/Footer";

import RecoverPasswordIcon from "../../assets/icons/recover-password-icon.svg";
import RecoverPasswordHero from "../../assets/images/recover-password-hero.svg"

import { useForm } from "react-hook-form";

export default function ForgotPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <Container>
        <InitNavBar />
        <TitleContainer>
          <PageTitle partOne={"Recuperar "} styledTitle={"Senha"} />
        </TitleContainer>

        <ContactFormContainer onSubmit={handleSubmit(onSubmit)}>
          <InputGroup>
            <LabelComponent htmlFor="email" name={"email"}>
              Informe seu e-mail de cadastro*
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
            <InputSubmit type="submit">
              <StyledSpan text={"RECUPERAR SENHA"} />
              <Hero src={RecoverPasswordIcon} alt="" />
            </InputSubmit>
          </InputGroup>
        </ContactFormContainer>

        <Hero src={RecoverPasswordHero} className={"hero"}/>

        <Footer />
      </Container>
    </>
  );
}
