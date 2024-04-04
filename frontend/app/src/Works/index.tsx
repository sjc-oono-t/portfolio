import { WorkItem } from "./components/WorkItem";
import { useHooks } from "./hooks";

export const Works = () => {
  const { workItems } = useHooks();

  return (
    <>
      <h1>Works</h1>
      {
        workItems.map((work, i) => {
          return <WorkItem key={`work-${i}`} workItem={work}/>
        })
      }
    </>
  );
};
