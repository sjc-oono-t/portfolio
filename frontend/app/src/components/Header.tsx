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

export const Header: React.FC = () => {
  return (
    <HeaderSyle>
      <button>About</button>
      <button>Works</button>
      <button>Skill</button>
    </HeaderSyle>
  );
}
