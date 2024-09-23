import { styled } from "styled-components"

const WorksWrapper = styled.div`
  height: 100vh;
  background: #f2e2e2;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 80px;
  letter-spacing: 8px;
  font-weight: 700;
`;

export const FirstView = () => {
  return (
    <WorksWrapper>
      PORTFORIO
    </WorksWrapper>
  );
};
