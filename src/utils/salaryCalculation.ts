// Age-based salary point calculation for Japan Highly Skilled Professional visa

import { VisaCategory } from '@/data/visaCategories';

export interface SalaryBracket {
  id: string;
  minSalary: number;
  maxSalary?: number;
  points: number;
  labelKey: string;
}

// Salary points for Academic Research category
export const academicSalaryPoints: SalaryBracket[] = [
  { id: "salary_academic_30m", minSalary: 30000000, points: 50, labelKey: "salary.academic.30m" },
  { id: "salary_academic_25m", minSalary: 25000000, maxSalary: 29999999, points: 45, labelKey: "salary.academic.25m" },
  { id: "salary_academic_20m", minSalary: 20000000, maxSalary: 24999999, points: 40, labelKey: "salary.academic.20m" },
  { id: "salary_academic_15m", minSalary: 15000000, maxSalary: 19999999, points: 35, labelKey: "salary.academic.15m" },
  { id: "salary_academic_10m", minSalary: 10000000, maxSalary: 14999999, points: 40, labelKey: "salary.academic.10m" },
  { id: "salary_academic_9m", minSalary: 9000000, maxSalary: 9999999, points: 35, labelKey: "salary.academic.9m" },
  { id: "salary_academic_8m", minSalary: 8000000, maxSalary: 8999999, points: 30, labelKey: "salary.academic.8m" },
  { id: "salary_academic_7m", minSalary: 7000000, maxSalary: 7999999, points: 25, labelKey: "salary.academic.7m" },
  { id: "salary_academic_6m", minSalary: 6000000, maxSalary: 6999999, points: 20, labelKey: "salary.academic.6m" },
  { id: "salary_academic_5m", minSalary: 5000000, maxSalary: 5999999, points: 15, labelKey: "salary.academic.5m" },
  { id: "salary_academic_4m", minSalary: 4000000, maxSalary: 4999999, points: 10, labelKey: "salary.academic.4m" },
  { id: "salary_academic_less4m", minSalary: 0, maxSalary: 3999999, points: 0, labelKey: "salary.academic.less4m" }
];

// Salary points for Specialized/Technical category
export const specializedSalaryPoints: SalaryBracket[] = [
  { id: "salary_specialized_10m", minSalary: 10000000, points: 40, labelKey: "salary.specialized.10m" },
  { id: "salary_specialized_9m", minSalary: 9000000, maxSalary: 9999999, points: 35, labelKey: "salary.specialized.9m" },
  { id: "salary_specialized_8m", minSalary: 8000000, maxSalary: 8999999, points: 30, labelKey: "salary.specialized.8m" },
  { id: "salary_specialized_7m", minSalary: 7000000, maxSalary: 7999999, points: 25, labelKey: "salary.specialized.7m" },
  { id: "salary_specialized_6m", minSalary: 6000000, maxSalary: 6999999, points: 20, labelKey: "salary.specialized.6m" },
  { id: "salary_specialized_5m", minSalary: 5000000, maxSalary: 5999999, points: 15, labelKey: "salary.specialized.5m" },
  { id: "salary_specialized_4m", minSalary: 4000000, maxSalary: 4999999, points: 10, labelKey: "salary.specialized.4m" },
  { id: "salary_specialized_3m", minSalary: 3000000, maxSalary: 3999999, points: 5, labelKey: "salary.specialized.3m" },
  { id: "salary_specialized_less3m", minSalary: 0, maxSalary: 2999999, points: 0, labelKey: "salary.specialized.less3m" }
];

// Salary points for Business Management category
export const managementSalaryPoints: SalaryBracket[] = [
  { id: "salary_management_30m", minSalary: 30000000, points: 50, labelKey: "salary.management.30m" },
  { id: "salary_management_25m", minSalary: 25000000, maxSalary: 29999999, points: 40, labelKey: "salary.management.25m" },
  { id: "salary_management_20m", minSalary: 20000000, maxSalary: 24999999, points: 30, labelKey: "salary.management.20m" },
  { id: "salary_management_15m", minSalary: 15000000, maxSalary: 19999999, points: 20, labelKey: "salary.management.15m" },
  { id: "salary_management_10m", minSalary: 10000000, maxSalary: 14999999, points: 10, labelKey: "salary.management.10m" },
  { id: "salary_management_less10m", minSalary: 0, maxSalary: 9999999, points: 0, labelKey: "salary.management.less10m" }
];

export const getSalaryPointsForCategory = (category: VisaCategory): SalaryBracket[] => {
  switch (category) {
    case 'academic':
      return academicSalaryPoints;
    case 'specialized':
      return specializedSalaryPoints;
    case 'management':
      return managementSalaryPoints;
    default:
      return specializedSalaryPoints;
  }
};

export const calculateSalaryPoints = (
  salary: number, 
  age: number, 
  category: VisaCategory
): { points: number; bracketId: string } => {
  const salaryBrackets = getSalaryPointsForCategory(category);
  
  // Find the appropriate salary bracket
  const bracket = salaryBrackets.find(bracket => {
    if (bracket.maxSalary === undefined) {
      return salary >= bracket.minSalary;
    }
    return salary >= bracket.minSalary && salary <= bracket.maxSalary;
  });

  if (!bracket) {
    return { points: 0, bracketId: '' };
  }

  // For now, return base points. Age-based adjustments can be added later
  // when we have the detailed age-based tables from the document
  return { points: bracket.points, bracketId: bracket.id };
};

export const validateSalaryForCategory = (salary: number, category: VisaCategory): boolean => {
  const categoryInfo = {
    academic: { minimumSalary: 0 },
    specialized: { minimumSalary: 3000000 },
    management: { minimumSalary: 3000000 }
  };

  return salary >= categoryInfo[category].minimumSalary;
};

export const formatSalary = (salary: number): string => {
  if (salary >= 10000000) {
    return `${(salary / 10000000).toFixed(1)}千万円`;
  } else if (salary >= 1000000) {
    return `${(salary / 1000000).toFixed(0)}百万円`;
  } else if (salary >= 10000) {
    return `${(salary / 10000).toFixed(0)}万円`;
  }
  return `${salary.toLocaleString()}円`;
};
