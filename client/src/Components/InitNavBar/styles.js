import { getByDisplayValue } from "@testing-library/react";
import styled from "styled-components";

export const ContainerNavBar = styled.div`
  background-color: var(--light-background);
  border: 1px solid var(--border-color);
  width: 100%;
`;

export const NavBar = styled.div`
  width: 100%;
  max-width: 1120px;
  height: 100px;

  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .links a,
  span {
    color: var(--white-color);

    &:hover {
      background: -webkit-linear-gradient(106.67deg, var(--green), var(--blue));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  .links a:not(:last-child) {
    margin-right: 1rem;
  }
`;

export const Button = styled.button`
  height: 44px;
  padding: 0 1rem;
  background-color: var(--components-background);

  border-radius: 12px;
  border: 1px solid var(--border-color);

  font-weight: 700;
  font-size: 1rem;

  margin-right: 12px;

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
  }
`;
