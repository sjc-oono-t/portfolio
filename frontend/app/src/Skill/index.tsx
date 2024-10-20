import { ContentTitle } from "components/ContentTitle"
import { styled } from "styled-components";
import { SkillChart } from "./components/SkillChart"
import { useHooks } from "./hooks"

const Wrapper = styled.div`
  padding: 0 128px;
`;
const Charts = styled.div`
  display: flex;
  gap: 32px;
  justify-content: center;
`;
const OtherSkill = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  justify-content: center;
`;
const OtherSkilLabel = styled.span`
  border: 1px solid #e0e0e0;
  border-radius: 16px;
  padding: 4px 16px;
  font-size: 14px;
  height: 30px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
`;

export const Skill: React.FC = () => {
  const { skills } = useHooks();

  return (
    <Wrapper>
      <ContentTitle title="SKILL" />
      <Charts>
        <SkillChart chartData={skills.frontend} title={"frontend"} />
        <SkillChart chartData={skills.backend} title={"backend"} />
        <SkillChart chartData={skills.tool} title={"tool"} />
      </Charts>
      <OtherSkill>
        {
          skills.other.map((skill, i) => {
            return <OtherSkilLabel key={`skill-${i}`}>{skill}</OtherSkilLabel>
          })
        }
      </OtherSkill>
    </Wrapper>
  );
}
