// Japan's Highly-Skilled Foreign Professional Points System Data
// Updated with detailed category-specific logic

import { VisaCategory, getAcademicPointsForCategory, getCareerPointsForCategory } from './visaCategories';
import { calculateSalaryPoints } from '@/utils/salaryCalculation';
import { allBonusPoints, getBonusPointsForCategory } from './bonusPoints';
import { calculateResearchAchievementPoints } from './researchAchievements';

// Legacy exports for backward compatibility (will be deprecated)
export const academicPoints = [
  { id: "doctor", label: "doctor", points: 30 },
  { id: "master", label: "master", points: 20 },
  { id: "bachelor", label: "bachelor", points: 10 },
];

export const careerPoints = [
  { id: "10plus", label: "10plus", points: 20 },
  { id: "7to9", label: "7to9", points: 15 },
  { id: "5to6", label: "5to6", points: 10 },
  { id: "3to4", label: "3to4", points: 5 },
  { id: "less3", label: "less3", points: 0 },
];

export const salaryPoints = [
  { id: "salary10M", label: "salary10M", points: 40 },
  { id: "salary9M", label: "salary9M", points: 35 },
  { id: "salary8M", label: "salary8M", points: 30 },
  { id: "salary7M", label: "salary7M", points: 25 },
  { id: "salary6M", label: "salary6M", points: 20 },
  { id: "salary5M", label: "salary5M", points: 15 },
  { id: "salary4M", label: "salary4M", points: 10 },
  { id: "salary3M", label: "salary3M", points: 5 },
  { id: "salaryLess3M", label: "salaryLess3M", points: 0 },
];

// Age points (same for all categories)
export const agePoints = [
  { id: "age29", label: "age29", points: 15 },
  { id: "age30to34", label: "age30to34", points: 10 },
  { id: "age35to39", label: "age35to39", points: 5 },
  { id: "age40plus", label: "age40plus", points: 0 },
];

// Japanese Language Proficiency (legacy - now handled in bonus points)
export const japanesePoints = [
  { id: "jlptN1", label: "jlptN1", points: 15 },
  { id: "jlptN2", label: "jlptN2", points: 10 },
  { id: "noJapanese", label: "noJapanese", points: 0 },
];

// Point thresholds
export const pointThresholds = {
  highlySkilled: 70, // Minimum points for highly skilled visa
  fastTrack: 80, // Fast track points
};

// Enhanced calculation interface
export interface CalculationInput {
  visaCategory: VisaCategory;
  age: number;
  salary: number;
  selections: Record<string, boolean>;
  researchAchievements?: string[];
  professionalDegree?: boolean; // MBA/MOT for specialized/management categories
}

// Calculate total points with new detailed logic
export const calculateTotalPointsDetailed = (input: CalculationInput): {
  total: number;
  breakdown: {
    academic: number;
    career: number;
    salary: number;
    age: number;
    research: number;
    bonus: number;
    professionalDegreeBonus: number;
  };
  warnings: string[];
} => {
  const { visaCategory, age, salary, selections, researchAchievements = [], professionalDegree = false } = input;
  const warnings: string[] = [];

  let academicTotal = 0;
  let careerTotal = 0;
  let salaryTotal = 0;
  let ageTotal = 0;
  let researchTotal = 0;
  let bonusTotal = 0;
  let professionalDegreeBonus = 0;

  // Calculate academic background points
  const academicOptions = getAcademicPointsForCategory(visaCategory);
  academicOptions.forEach(item => {
    if (selections[item.id]) {
      academicTotal += item.points;
    }
  });

  // Calculate professional degree bonus (MBA/MOT)
  if (professionalDegree && (visaCategory === 'specialized' || visaCategory === 'management')) {
    if (selections['academic_doctorate_or_master'] || selections['academic_master']) {
      professionalDegreeBonus = 5;
    }
  }

  // Calculate career points
  const careerOptions = getCareerPointsForCategory(visaCategory);
  careerOptions.forEach(item => {
    if (selections[item.id]) {
      careerTotal += item.points;
    }
  });

  // Calculate salary points
  const salaryResult = calculateSalaryPoints(salary, age, visaCategory);
  salaryTotal = salaryResult.points;

  // Calculate age points
  agePoints.forEach(item => {
    if (selections[item.id]) {
      ageTotal += item.points;
    }
  });

  // Calculate research achievement points (Academic category only)
  if (visaCategory === 'academic') {
    researchTotal = calculateResearchAchievementPoints(researchAchievements);
  }

  // Calculate bonus points
  const applicableBonusPoints = getBonusPointsForCategory(visaCategory);
  applicableBonusPoints.forEach(item => {
    if (selections[item.id]) {
      // Check for mutually exclusive selections
      if (item.mutuallyExclusive) {
        const conflictingSelections = item.mutuallyExclusive.filter(id => selections[id]);
        if (conflictingSelections.length > 0) {
          warnings.push(`bonus.warning.mutually_exclusive.${item.id}`);
          return; // Skip this bonus point
        }
      }
      bonusTotal += item.points;
    }
  });

  const total = academicTotal + careerTotal + salaryTotal + ageTotal + researchTotal + bonusTotal + professionalDegreeBonus;

  return {
    total,
    breakdown: {
      academic: academicTotal,
      career: careerTotal,
      salary: salaryTotal,
      age: ageTotal,
      research: researchTotal,
      bonus: bonusTotal,
      professionalDegreeBonus
    },
    warnings
  };
};

// Legacy function for backward compatibility
export const calculateTotalPoints = (selections: Record<string, boolean>) => {
  let total = 0;

  // Calculate points from basic categories (legacy logic)
  academicPoints.forEach(item => {
    if (selections[item.id]) {
      total += item.points;
    }
  });

  careerPoints.forEach(item => {
    if (selections[item.id]) {
      total += item.points;
    }
  });

  salaryPoints.forEach(item => {
    if (selections[item.id]) {
      total += item.points;
    }
  });

  agePoints.forEach(item => {
    if (selections[item.id]) {
      total += item.points;
    }
  });

  japanesePoints.forEach(item => {
    if (selections[item.id]) {
      total += item.points;
    }
  });

  // Calculate points from bonus categories
  allBonusPoints.forEach(item => {
    if (selections[item.id]) {
      total += item.points;
    }
  });

  return total;
};

// Determine qualification status
export const determineQualification = (totalPoints: number) => {
  if (totalPoints >= pointThresholds.fastTrack) {
    return {
      qualified: true,
      level: "fastTrack",
      message: "fastTrackMessage"
    };
  } else if (totalPoints >= pointThresholds.highlySkilled) {
    return {
      qualified: true,
      level: "highlySkilled",
      message: "highlySkillMessage"
    };
  } else {
    return {
      qualified: false,
      level: "notQualified",
      message: "notQualifiedMessage"
    };
  }
};
