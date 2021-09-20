import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    margin-top: 2rem;
    color: var(--red);
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background: #fff;
    border-radius: 10px;
    margin: 2rem;

    h3 {
      margin: 2rem;
      color: var(--text-title);
    }

    img {
      align-self: center;
      max-width: 250px;
    }

    p {
      text-align: justify;
    }

    button {
      background: none;
      border: 0;
      padding-bottom: 1rem;

      svg {
        color: var(--red);
        @media (max-width: 650px) {
          width: 28px;
          height: 28px;
        }
      }
    }
  }
`;
