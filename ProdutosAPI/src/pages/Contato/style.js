import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 40px auto;
  padding: 8px 4px;

  > div {
    display: flex;
    gap: 20px;
    margin-top: 40px;
    opacity: 0;
    transform: translateX(-20px);
    animation: animeLeft 0.3s forwards;

    @keyframes animeLeft {
      to {
        opacity: 1;
        transform: initial;
      }
    }

    img {
      max-width: 350px;
      border-radius: 5px;
    }

    .content {
      margin-top: 20px;

      h2 {
        margin-bottom: 12px;
      }

      > p {
        margin-bottom: 12px;
      }
    }
  }
`;
