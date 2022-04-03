import styled from "styled-components";



export const SectionsContainer = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
`;

export const ExploreContainer = styled.section`
  display: flex;
  align-items: center;
  padding-top: 3rem;
`;

export const TextContainer = styled.div`
  width: 50%;
  margin-right: 1rem;
`;

export const Texts = styled.div`
  margin-bottom: 1rem;

  p {
    font-weight: 300;
    line-height: 175%;

    span {
      background: -webkit-linear-gradient(106.67deg, var(--green), var(--blue));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;

      font-weight: 700;
    }
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
`;

export const TitleContainer = styled.div`
  text-align: center;
  margin-top: 2rem;
  h1 {
    font-size: 3rem;

    span {
      background: -webkit-linear-gradient(106.67deg, var(--green), var(--blue));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  margin-bottom: 2rem;
`;

export const ManifestTextContainer = styled.div`
  display: flex;
  align-items: center;
`


export const Banner = styled.div`
  background: var( --light-background);
  border: 1px solid var(--border-color);
  text-align: center;
  font-size: 22px;
  display: flex;
  margin-top: 2rem;
  padding: 3rem 0;


  p {
    width: 50%;
    margin: auto;
    line-height: 200%;
  }

`
