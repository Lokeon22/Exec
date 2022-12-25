import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 20px;

  .content {
    display: flex;
    gap: 20px;
    align-items: center;
  }

  .img {
    display: flex;
    flex-direction: column;
    gap: 16px;

    @media screen and (min-width: 769px) {
      flex-direction: row;
    }

    img {
      width: 350px;
      border-radius: 5px;
    }
  }

  .content-product {
    max-width: 450px;
    padding: 12px 14px;

    h2 {
      font-size: 30px;
      margin-bottom: 12px;
    }
    span {
      padding: 0 4px;
      background-color: green;
      font-size: 24px;
    }
    p {
      margin-top: 12px;
      font-size: 24px;
    }
  }
`;
