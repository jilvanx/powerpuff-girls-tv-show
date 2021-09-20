import styled from "styled-components";

export const Container = styled.header`
  background: var(--pink);
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1220px;
  margin: 0 auto;
  padding: 1rem;

  h1 {
    color: var(--text-title);
  }

  a {
    margin: 0 auto;
    text-decoration: none;
    color: var(--text-title);
  }
`;
