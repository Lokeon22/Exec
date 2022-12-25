import { Link } from "react-router-dom";

import { Button } from "../Button";
import { Container } from "./style";

export const Header = () => {
  return (
    <Container>
      <Link to="/">
        <Button title="Produtos" />
      </Link>
      <Link to="/contact">
        <Button title="Contato" />
      </Link>
    </Container>
  );
};
