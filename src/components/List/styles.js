import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    margin: 1rem;
    color: var(--text-title);
  }
`;

export const EpisodieList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  list-style: none;

  li {
    display: flex;
    flex-direction: column;
    text-align: center;
    background: #fff;
    border-radius: 10px;
    padding: 1rem;
    cursor: pointer;

    strong {
      color: var(--text-title);
      font-size: 16px;
      line-height: 20px;
      margin: 1rem;
    }

    p {
      color: var(--red);
    }
  }

  @media only screen and (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (max-width: 650px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
