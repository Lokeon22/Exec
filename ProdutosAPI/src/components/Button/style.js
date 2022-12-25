import styled from "styled-components";

export const Container = styled.button`
  width: auto;
  padding: 8px 24px;
  cursor: pointer;
  border-radius: 4px;
  font-size: 1.125rem;
  transition: 0.3s ease-out;
  &:hover {
    background-color: blue;
    color: white;
  }
`;
