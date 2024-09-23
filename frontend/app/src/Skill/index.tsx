import { ContentTitle } from "components/ContentTitle"
import { ResponsiveRadar } from '@nivo/radar'
import { styled } from "styled-components";
import { SkillChart } from "./components/SkillChart"

const Charts = styled.div`
  display: flex;
  gap: 32px;
  justify-content: center;
`;

export const Skill: React.FC = (props) => {
  const data = [
    {
      chardonay: 48,
      taste: 'React'
    },
    {
      chardonay: 54,
      taste: 'HTML/CSS'
    },
    {
      chardonay: 46,
      taste: 'Vue'
    },
    {
      chardonay: 102,
      taste: 'TypeScript'
    },
    {
      chardonay: 29,
      taste: 'JavaScript'
    }
  ]

  return (
    <>
      <ContentTitle title="SKILL" />
      <Charts>
        <SkillChart />
        <SkillChart />
        <SkillChart />
      </Charts>
    </>
  );
}
