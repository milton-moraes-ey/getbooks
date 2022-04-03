import { type } from "@testing-library/user-event/dist/type";
import styled from "styled-components";

export const ContactFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 2rem;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  background: var(--components-background);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  outline: none;
  padding: 1rem;
  color: var(--white-color);
  font-size: 1rem;
  width: 25rem;
  font-family: "Poppins", sans-serif;

  ::placeholder {
    color: var(--placeholder-color);
  }

  :focus {
    border: 1px solid var(--white-color);
  }
`;

export const InputSubmit = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  background: var(--components-background);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  outline: none;
  padding: 1rem;
  width: 25rem;

  font-family: "Poppins", sans-serif;
  font-weight: 800;
  font-size: 1.125rem;
  cursor: pointer;

  transition: 0.3s;

  &:hover {
    background-color: var(--white-color);
  }

  span {
    background: -webkit-linear-gradient(106.67deg, var(--green), var(--blue));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: "Poppins", sans-serif;

    margin-right: 1rem;
  }
`;

export const TextArea = styled.textarea`
  background: var(--components-background);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  outline: none;
  padding: 1rem;
  color: var(--white-color);
  font-size: 1rem;
  width: 25rem;
  height: 200px;
  font-family: "Poppins", sans-serif;
`;

export const LabelComponent = styled.label`
  font-family: "Overpass", sans-serif;
  font-size: 1.125rem;
  color: var(--white-color);
  font-weight: 800;
  margin-bottom: 0.5rem;
`;

export const ErrorSpan = styled.small`
  color: #e94848;
  margin-top: 0.5rem;
  font-family: "Poppins", sans-serif;
`;
