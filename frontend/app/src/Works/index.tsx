import { WorkItem } from "./components/WorkItem";
import { useHooks } from "./hooks";
import { styled } from "styled-components"

const WorksWrapper = styled.div`
  padding: 16px 128px;
`;

const WorkItemWrapper = styled(WorkItem)`
  margin-bottom: 24px;
`;

export const Works = () => {
  const { workItems } = useHooks();

  return (
    <WorksWrapper>
      <h1>WORKS</h1>
      <>
        {
          workItems.map((work, i) => {
            return <WorkItemWrapper key={`work-${i}`} workItem={work} />
          })
        }
      </>
    </WorksWrapper>
  );
};
