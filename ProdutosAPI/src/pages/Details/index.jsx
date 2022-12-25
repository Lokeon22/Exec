import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../../components/Header";
import { Infos } from "../../components/Infos";
import { Container } from "./style";

export const Details = () => {
  const { name } = useParams();
  const [infos, setInfos] = useState(null);
  const [removeLoading, setRemoveLoading] = useState(false);

  useEffect(() => {
    const getProdutoInfo = async () => {
      const response = await fetch(
        `https://ranekapi.origamid.dev/json/api/produto/${name}`
      ).then((res) => res.json());
      setInfos(response);
      setRemoveLoading(true);
    };
    getProdutoInfo();
  }, []);

  if (!removeLoading)
    return <h2 style={{ marginTop: "20px" }}>Carregando...</h2>;
  if (infos === null) return null;
  return (
    <Container>
      <Header />
      <Infos infos={infos} />
    </Container>
  );
};
