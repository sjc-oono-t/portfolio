import { WorkItem } from "./components/WorkItem";

export const Works = () => {
  const works = [
    {
      title: "Work 1",
      description: "Description 1",
      workingProcess: '要件定義/設計/実装/テスト/保守',
      technology: 'React',
    },
    {
      title: "Work 2",
      description: "Description 2",
      workingProcess: '実装',
      technology: 'React',
    },
    {
      title: "Work 3",
      description: "Description 3",
      workingProcess: '実装/テスト',
      technology: 'React',
    },
  ]

  return (
    <div>
      <h1>Works</h1>
      {
        works.map((work, i) => {
          return <WorkItem key={`work-${i}`} workItem={work}/>
        })
      }
    </div>
  );
};
