import { WorkItemData } from 'Works/components/WorkItem/interface';

interface ReturnHooks {
  workItems: WorkItemData[];
}

export const useHooks = (): ReturnHooks => {
  const workItems = [
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

  return {
    workItems,
  };
}