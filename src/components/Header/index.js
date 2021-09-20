import { Link } from "react-router-dom";

import { Container, Content } from "./styles";

export function Header() {
  return (
    <Container>
      <Content>
        <Link to="/">
          <h1>TV Show</h1>
        </Link>
      </Content>
    </Container>
  );
}
