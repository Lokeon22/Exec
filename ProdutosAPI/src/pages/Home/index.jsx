import { useState, useEffect } from "react";
import { Container } from "./style";

import { Header } from "../../components/Header";
import { Card } from "../../components/Card";

export const Home = () => {
  const [produtos, setProdutos] = useState([]);
  const [removeLoading, setRemoveLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        `https://ranekapi.origamid.dev/json/api/produto`
      ).then((res) => res.json());
      setProdutos(response);
      setRemoveLoading(true);
    };
    getData();
  }, []);

  return (
    <Container>
      <Header />
      {!removeLoading && (
        <h2 style={{ marginTop: "20px" }}>Carregando Produtos...</h2>
      )}
      <div className="carousel">
        <div>
          {produtos.map((produto, index) => {
            return (
              <Card key={index} title={produto.id} fotos={produto.fotos[0]} />
            );
          })}
        </div>
      </div>
    </Container>
  );
};
