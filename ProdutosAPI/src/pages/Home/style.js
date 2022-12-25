import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 40px auto;
  padding: 8px 4px;

  .carousel {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    margin-top: 40px;

    > div {
      display: flex;
      gap: 40px;
      flex: none;
      opacity: 0;
      transform: translateX(-20px);
      animation: animeLeft 0.3s forwards;
    }

    @keyframes animeLeft {
      to {
        opacity: 1;
        transform: initial;
      }
    }
  }
`;
