import { styled } from "styled-components";

const HeaderSyle = styled.header`
  position: fixed;
  top: 0;
  height: 64px;
  width: 100%;
  background: #FBF9FA;
  display: flex;
  justify-content: flex-end;
  gap: 24px;
  padding: 0 40px;
  box-sizing: border-box;
  align-items: center;
`;
const MenuItem = styled.div`
  cursor: pointer;
  padding: 4px 0;
  border-bottom: 2px solid transparent;

  &:hover {
    border-bottom: 2px solid #E0C2C4;
  }
`;

export const Header: React.FC = () => {
  return (
    <HeaderSyle>
      <MenuItem>ABOUT</MenuItem>
      <MenuItem>WORKS</MenuItem>
      <MenuItem>SKILL</MenuItem>
    </HeaderSyle>
  );
}
