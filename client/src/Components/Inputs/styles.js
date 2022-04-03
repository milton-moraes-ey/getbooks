import styled from "styled-components";

export const Input = styled.input`
  background: var(--components-background);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  outline: none;
  padding: 1rem;
  color: var(--white-color);
  font-size: 1rem;
  width: 25rem;
  
  ::placeholder {
    color: var(--placeholder-color);
  }

  :focus {
    border: 1px solid var(--white-color);
  }
`;
