import styled from "styled-components";

export const FooterComponent = styled.div`
  width: 100%;

  
  background: var(--light-background);
  border: 1px solid var(--border-color);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 20vh;
  margin-top: 2rem;
  padding: 2rem;

  small {
    color: #434343;
    font-family: "Poppins", sans-serif;
    margin-top: 1rem;
    
    a {
      text-decoration: underline;
      color: #1F899B
    }
  }
`;
