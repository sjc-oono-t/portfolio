import { styled } from "styled-components"
import profileImage from "images/profile.jpg";
import { SnsLinks } from "./components/SnsLinks"
import { GoMail } from "react-icons/go";
import { ContentTitle } from "components/ContentTitle"

const Wrapper = styled.div`
  padding: 0 128px;
`;
const Content = styled.div`
  display: flex;
  gap: 48px;
  justify-content: center;
`;
const ProfileImageContent = styled.div`
  width: 320px;
  height: 320px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;

  img {
    width: 100%;
  }
`;
const ProfileSentenceContent = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 16px;
`;
const Name = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
`;
const MailIcon = styled(GoMail)`
  margin-right: 8px;
  margin-left: 4px;
`;

export const About: React.FC = () => {
  return (
    <Wrapper>
      <ContentTitle title="ABOUT" />

      <Content>
        <ProfileImageContent>
          <img src={profileImage} alt="mochi" />
        </ProfileImageContent>
        <ProfileSentenceContent>
          <Name>もち / Mochi</Name>
          <div>
            2015年4月〜島根でWebアプリの開発をしています。<br />
            バックエンドからフロントエンドまで幅広く対応できます。
          </div>
          <div>
            contact<MailIcon />
            hogehoge@hogehoge
          </div>
          <SnsLinks />
        </ProfileSentenceContent>
      </Content>
    </Wrapper>
  );
}
