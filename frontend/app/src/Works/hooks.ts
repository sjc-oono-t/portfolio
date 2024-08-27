import { WorkItemData } from 'Works/components/WorkItem/interface';
import { useEffect, useState } from 'react';
import { getApiData } from 'infra/api';

interface ReturnHooks {
  workItems: WorkItemData[];
}

export const useHooks = (): ReturnHooks => {
  const [workItems, setWorkItems] = useState<WorkItemData[]>([]);

  const fetchWorkItems = async () => {
    const result = await getApiData('api/v1/work_items');
    setWorkItems(result.data);
  }

  useEffect(() => {
    fetchWorkItems();
  }, [])

  return {
    workItems,
  };
}