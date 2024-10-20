import { ResponsiveRadar } from '@nivo/radar'
import { styled } from "styled-components";
import { Skill } from "../interface";

const Title = styled.div`
  text-align: center;
`;
const Chart = styled.div`
  height: 320px;
`;

interface Props {
  title: string;
  chartData: Skill[];
}

export const SkillChart: React.FC<Props> = (props) => {
  const data: Record<string, unknown>[] = props.chartData.map((chartDatum) => { return {...chartDatum}});

  return (
    <div style={{width: '320px'}}>
      <Title>{props.title}</Title>
      <Chart>
        <ResponsiveRadar
          animate
          curve="catmullRomClosed"
          data={data}
          gridShape="linear"
          indexBy="name"
          // ツールチップOFF
          isInteractive={false}
          keys={[
            'value',
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
