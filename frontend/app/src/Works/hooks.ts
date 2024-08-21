import axios from 'axios'
import { WorkItemData } from 'Works/components/WorkItem/interface';
import { useEffect, useState } from 'react';

const DEFAULT_API_CONFIG = {
  baseURL: 'http://0.0.0.0:3000/api/v1',
  timeout: 5000,
  mode: 'cors',
  credentials: 'include',
  headers: {
    ContentType: 'application/json',
    Accept: 'application/json',
  },
}

const newAxiosInstance = () => {
  const instance = axios.create(DEFAULT_API_CONFIG)

  instance.interceptors.response.use(
    (response) => {
      if (process.env.NODE_ENV === 'development') {
        console.log(response)
      }
      return response
    },
    (error) => {
      return Promise.reject(error)
    },
  )

  return instance
}

export const getAPIData = async (path: string) => {
  const instance = newAxiosInstance()
  try {
    const response = await instance.get(path)
    return response
  } catch (error: any) {
    return error.response
  }
}

interface ReturnHooks {
  workItems: WorkItemData[];
}

export const useHooks = (): ReturnHooks => {
  // const workItems = [
  //   {
  //     title: "施設予約管理システム",
  //     url: "https://www.google.co.jp/",
  //     description: "施設の予約ができるシステム。",
  //     workingProcess: ['要件定義', '設計', '実装', 'テスト', '保守'],
  //     technology: ['Ruby on Rails', 'React', 'TypeScript', 'PostgreSQL'],
  //   },
  //   {
  //     title: "医療機関向け健診管理システム",
  //     description: "医療機関で使用する健診結果の管理システム。",
  //     workingProcess: ['実装'],
  //     technology: ['React', 'TypeScript'],
  //   },
  //   {
  //     title: "食品製造工場向け発注システム",
  //     description: "Description 3",
  //     workingProcess: ['設計', '実装', 'テスト'],
  //     technology: ['React', 'TypeScript'],
  //   },
  //   {
  //     title: "地域版RESAS",
  //     description: "",
  //     workingProcess: ['設計', '実装'],
  //     technology: ['React', 'TypeScript'],
  //   },
  //   {
  //     title: "自治体向けインフラ維持管理システム",
  //     description: "Description 5",
  //     workingProcess: ['設計', '実装', 'テスト'],
  //     technology: ['React', 'TypeScript'],
  //   },
  // ]

  const [workItems, setWorkItems] = useState<WorkItemData[]>([]);

  const fetchWorkItems = async () => {
    const result = await getAPIData('api/v1/work_items');
    setWorkItems(result);
  }

  useEffect(() => {
    fetchWorkItems();
  }, [])

  return {
    workItems,
  };
}