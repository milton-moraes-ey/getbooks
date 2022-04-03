import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  input {
    background: var(--background-components);
    padding: 1rem;
    width: 20rem;

    border: 1px solid var(--border-color);
    border-radius: 12px;
    outline: none;
    padding: 1rem;

    color: var(--white-color);
    font-size: 1rem;

    width: 90%;
    height: 72px;

    ::-webkit-input-placeholder {
      /* Edge */
      color: var(--placeholder-color);
    }

    :-ms-input-placeholder {
      /* Internet Explorer */
      color: var(--placeholder-color);
    }

    ::placeholder {
      color: var(--placeholder-color);
    }
  }

  label button {
    position: absolute;
    background: -webkit-linear-gradient(106.67deg, var(--green), var(--blue));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    height: 100%;
    padding: 1rem;
    border: none;
    border-left: 1px solid var(--border-color);
    border-radius: 12px;
    cursor: pointer;
    
    font-family: "Poppins", sans-serif;
    font-weight: 700;
    font-size: 1rem;


    top: 50%;
    left: 70%;
    transform: translateY(-50%);
    
  }
`;
