import React from "react";
import {
  ContactFormContainer,
  Input,
  LabelComponent,
  TextArea,
  InputGroup,
  InputSubmit,
  ErrorSpan,
} from "./styles";

import StyledSpan from "../StyledSpan";

import SendIcon from "../../assets/icons/send-icon.svg";

import { useForm } from "react-hook-form";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <ContactFormContainer onSubmit={handleSubmit(onSubmit)}>
        <InputGroup>
          <LabelComponent htmlFor="fullName" name={"fullName"}>
            Nome Completo*
          </LabelComponent>
          <Input
            type="text"
            id="fullName"
            name="fullName"
            placeholder="Escreva seu nome completo"
            {...register("fullName", { required: "Informe seu nome completo" })}
          />
          <ErrorSpan>{errors.fullName?.message}</ErrorSpan>
        </InputGroup>

        <InputGroup>
          <LabelComponent htmlFor="email" name={"email"}>
            Email*
          </LabelComponent>
          <Input
            type="email"
            id="email"
            name="email"
            placeholder="seu.email@dominio.com"
            {...register("email", { required: "Informe seu endereço e-mail" })}
          />

          <ErrorSpan>{errors.email?.message}</ErrorSpan>
        </InputGroup>
        <InputGroup>
          <LabelComponent htmlFor="phone" name={"phone"}>
            Telefone (opcional)
          </LabelComponent>
          <Input
            type="text"
            id="phone"
            name="phone"
            placeholder="(99) 99999-9999"
            {...register("phone", { required: false })}
          />
        </InputGroup>

        <InputGroup>
          <LabelComponent htmlFor="message" name={"message"}>
            Mensagem*
          </LabelComponent>
          <TextArea
            type="text"
            id="message"
            name="message"
            placeholder="Escreva sua mensagem aqui. Fique a vontade para expressar sua opinião. Te responderemos em breve ♥"
            {...register("message", {
              required: "Insira sua mensagem",
              maxLength: 250,
            })}
          />

          <ErrorSpan>{errors.message?.message}</ErrorSpan>
        </InputGroup>
        <InputGroup>
          <InputSubmit type="submit">
            <StyledSpan text={"ENVIAR"} />
            <img src={SendIcon} alt="" />
          </InputSubmit>
        </InputGroup>
      </ContactFormContainer>
    </>
  );
}
