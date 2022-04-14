import styled from "styled-components";

export const FooterComponent = styled.div`
  width: 100%;

  background: var(--light-background);
  border: 1px solid var(--border-color);

  display: flex;
  align-items: center;
  justify-content: center;

  height: 20vh;
  margin-top: 2rem;
  padding: 2rem;

  .text-container {
    display: flex;
    flex-direction: column;
    justify-content: center; 
    align-items: center;
    margin-right: 2rem;
    img {
      width: 200px;
      max-width: 100%;
    }
  }

  small {
    color: #434343;
    font-family: "Poppins", sans-serif;
    margin-top: 1rem;

    a {
      text-decoration: underline;
      color: #1f899b;
    }
  }
`;
