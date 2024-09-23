import { styled } from "styled-components"

const Title = styled.div`
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
  margin-top: 64px;
  margin-bottom: 32px;

`;

interface Props {
  title: string;
}

export const ContentTitle: React.FC<Props> = (props) => {
  return (
    <Title>{props.title}</Title>
  );
}
