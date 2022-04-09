import styled from "styled-components";

export const Button = styled.button`
  background: var(--components-background);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  padding: 0 1.5rem;
  display: inline-flex;
  align-items: center;
  justify-content: space-around;
  height: 56px;
  cursor: pointer;

  font-size: 1rem;
  font-weight: 700;

  transition: .3s;

  &:hover {
    background-color: var(--white-color);
  }

  span {
    background: -webkit-linear-gradient(106.67deg, var(--green), var(--blue));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: "Poppins", sans-serif;
  }

  img {
    margin-left: 12px;
  }
`;
