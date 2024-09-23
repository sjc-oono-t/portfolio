import { WorkItem } from "./components/WorkItem";
import { useHooks } from "./hooks";
import { styled } from "styled-components"
import { ContentTitle } from "components/ContentTitle"

const WorksWrapper = styled.div`
  padding: 0 128px;
`;
const WorkList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const Works: React.FC = () => {
  const { workItems } = useHooks();

  return (
    <WorksWrapper>
      <ContentTitle title="WORKS" />
      <WorkList>
        {
          workItems.map((work, i) => {
            return <WorkItem key={`work-${i}`} workItem={work} />
          })
        }
      </WorkList>
    </WorksWrapper>
  );
};
