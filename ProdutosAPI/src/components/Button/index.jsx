import { Container } from "./style";

export const Button = ({ title, ...rest }) => {
  return (
    <>
      <Container type="submit" {...rest}>
        {title}
      </Container>
    </>
  );
};
