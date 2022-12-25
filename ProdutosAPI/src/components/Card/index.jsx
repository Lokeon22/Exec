import { Link } from "react-router-dom";
import { Container } from "./style";

export const Card = ({ id, title, fotos }) => {
  return (
    <Container>
      <Link to={`/details/${title}`}>
        <img src={fotos.src} key={fotos.titulo} />
      </Link>
      <h2>{title}</h2>
    </Container>
  );
};
