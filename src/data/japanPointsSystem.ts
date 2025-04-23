// Japan's Highly-Skilled Foreign Professional Points System Data

// Academic Background
export const academicPoints = [
  { id: "doctor", label: "doctor", points: 30 },
  { id: "master", label: "master", points: 20 },
  { id: "bachelor", label: "bachelor", points: 10 },
];

// Professional Career
export const careerPoints = [
  { id: "10plus", label: "10plus", points: 20 },
  { id: "7to9", label: "7to9", points: 15 },
  { id: "5to6", label: "5to6", points: 10 },
  { id: "3to4", label: "3to4", points: 5 },
  { id: "less3", label: "less3", points: 0 },
];

// Annual Salary
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

// Age
export const agePoints = [
  { id: "age29", label: "age29", points: 15 },
  { id: "age30to34", label: "age30to34", points: 10 },
  { id: "age35to39", label: "age35to39", points: 5 },
  { id: "age40plus", label: "age40plus", points: 0 },
];

// Japanese Language Proficiency
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

// Calculate total points
import { allBonusPoints } from './bonusPoints';

export const calculateTotalPoints = (selections: Record<string, boolean>) => {
  let total = 0;

  // Calculate points from basic categories
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
