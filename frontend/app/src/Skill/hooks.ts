import { Skill } from './interface';
import { useEffect, useState } from 'react';
import { getApiData } from 'infra/api';

interface Skills {
  frontend: Skill[],
  backend: Skill[],
  tool: Skill[],
  other: string[],
}

interface ReturnHooks {
  skills: Skills;
}

const initialSkills = {
  frontend: [],
  backend: [],
  tool: [],
  other: [],
}

export const useHooks = (): ReturnHooks => {
  const [skills, setSkills] = useState<Skills>(initialSkills);

  const fetchSkills = async () => {
    const result = await getApiData('api/v1/skills');
    setSkills(result.data);
  }

  useEffect(() => {
    fetchSkills();
  }, [])

  return {
    skills,
  };
}