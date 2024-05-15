import { WorkItemData } from 'Works/components/WorkItem/interface';

interface ReturnHooks {
  workItems: WorkItemData[];
}

export const useHooks = (): ReturnHooks => {
  const workItems = [
    {
      title: "施設予約管理システム",
      url: "https://www.google.co.jp/",
      description: "施設の予約ができるシステム。",
      workingProcess: ['要件定義', '設計', '実装', 'テスト', '保守'],
      technology: ['Ruby on Rails', 'React', 'TypeScript', 'PostgreSQL'],
    },
    {
      title: "医療機関向け健診管理システム",
      description: "医療機関で使用する健診結果の管理システム。",
      workingProcess: ['実装'],
      technology: ['React', 'TypeScript'],
    },
    {
      title: "食品製造工場向け発注システム",
      description: "Description 3",
      workingProcess: ['設計', '実装', 'テスト'],
      technology: ['React', 'TypeScript'],
    },
    {
      title: "地域版RESAS",
      description: "",
      workingProcess: ['設計', '実装'],
      technology: ['React', 'TypeScript'],
    },
    {
      title: "自治体向けインフラ維持管理システム",
      description: "Description 5",
      workingProcess: ['設計', '実装', 'テスト'],
      technology: ['React', 'TypeScript'],
    },
  ]

  return {
    workItems,
  };
}