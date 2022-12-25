import { Container } from "./style";

import { Header } from "../../components/Header";
import escrever from "../../assets/escrever.jpg";

export const Contato = () => {
  return (
    <Container>
      <Header />
      <div>
        <div>
          <img src={escrever} />
        </div>
        <div className="content">
          <h2>Entre em contato</h2>
          <p>andreorigamid@gmail.com</p>
          <p>99999-9999</p>
          <p>Rua Ali Perto, 99</p>
        </div>
      </div>
    </Container>
  );
};
