import { ResponsiveRadar } from '@nivo/radar'
import { styled } from "styled-components";

const Title = styled.div`
  text-align: center;
`;
const Chart = styled.div`
  height: 320px;
`;

export const SkillChart: React.FC = (props) => {
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
    <div style={{width: '320px'}}>
      <Title>frontend</Title>
      <Chart>
        <ResponsiveRadar
          animate
          curve="catmullRomClosed"
          data={data}
          gridShape="linear"
          indexBy="taste"
          // ツールチップOFF
          isInteractive={false}
          keys={[
            'chardonay',
          ]}
          margin={{
            bottom: 0,
            left: 80,
            right: 80,
            top: 0,
          }}
        />
      </Chart>
    </div>
  );
}
