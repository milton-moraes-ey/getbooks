import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
`;

export const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
`;

export const ShowPassword = styled.div`
  justify-content: space-evenly;
  label {
    color: var(--white-color);
    font-family: "Poppins", sans-serif;
    font-size: 14px;
  }
`;

export const ShowPasswordCheckbox = styled.input`
  margin-top: 1rem;
  margin-right: 1rem;
  transform: scale(1.4);
  outline: none;
  border: none; ;
`;

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 3rem;
  row-gap: .5rem;

  .link {
    color: var(--white-color);
    text-decoration: underline;
    span {

    }
  } 
`;
