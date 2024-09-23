import { styled } from "styled-components"
import { SiQiita, SiGithub } from "react-icons/si";
import { RiTwitterXFill } from "react-icons/ri";

const Content = styled.div`
  display: flex;
  gap: 8px;
  font-size: 1.3rem;
`;
const Link = styled.a`
  color: #404040;
  &:hover {
    opacity: .6;
  }
`;

export const SnsLinks: React.FC = () => {
  return (
    <Content>
      <Link href="https://github.com" target="_blank">
        <SiGithub />
      </Link>
      <Link href="https://x.com/?lang=ja" target="_blank">
        <RiTwitterXFill />
      </Link>
      <Link href="https://github.com" target="_blank">
        <SiQiita />
      </Link>
    </Content>
  );
}
