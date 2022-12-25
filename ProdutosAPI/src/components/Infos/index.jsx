import { Container } from "./style";

export const Infos = ({ infos }) => {
  return (
    <Container>
      <div className="content">
        <div className="img">
          {infos.fotos.map((foto, index) => {
            return <img key={index} src={foto.src} />;
          })}
        </div>
        <div className="content-product">
          <h2>{infos.nome}</h2>
          <span>R$ {infos.preco}</span>
          <p>{infos.descricao}</p>
        </div>
      </div>
    </Container>
  );
};
