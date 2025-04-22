// Japan's Highly-Skilled Foreign Professional Points System Data

// Academic Background
export const academicPoints = [
  { id: "doctor", label: "博士学位", points: 30 },
  { id: "master", label: "硕士学位", points: 20 },
  { id: "bachelor", label: "学士学位", points: 10 },
];

// Professional Career
export const careerPoints = [
  { id: "10plus", label: "10年以上", points: 20 },
  { id: "7to9", label: "7年至9年", points: 15 },
  { id: "5to6", label: "5年至6年", points: 10 },
  { id: "3to4", label: "3年至4年", points: 5 },
  { id: "less3", label: "3年以下", points: 0 },
];

// Annual Salary
export const salaryPoints = [
  { id: "salary10M", label: "1000万日元以上", points: 40 },
  { id: "salary9M", label: "900万至1000万日元", points: 35 },
  { id: "salary8M", label: "800万至900万日元", points: 30 },
  { id: "salary7M", label: "700万至800万日元", points: 25 },
  { id: "salary6M", label: "600万至700万日元", points: 20 },
  { id: "salary5M", label: "500万至600万日元", points: 15 },
  { id: "salary4M", label: "400万至500万日元", points: 10 },
  { id: "salary3M", label: "300万至400万日元", points: 5 },
  { id: "salaryLess3M", label: "300万日元以下", points: 0 },
];

// Age
export const agePoints = [
  { id: "age29", label: "29岁以下", points: 15 },
  { id: "age30to34", label: "30至34岁", points: 10 },
  { id: "age35to39", label: "35至39岁", points: 5 },
  { id: "age40plus", label: "40岁及以上", points: 0 },
];

// Japanese Language Proficiency
export const japanesePoints = [
  { id: "jlptN1", label: "JLPT N1级或BJT商务日语480分以上", points: 15 },
  { id: "jlptN2", label: "JLPT N2级或BJT商务日语400至479分", points: 10 },
  { id: "noJapanese", label: "无日语能力证明", points: 0 },
];

// Point thresholds
export const pointThresholds = {
  highlySkilled: 70, // 高度人才签证最低分数
  fastTrack: 80, // 快速通道分数
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
      message: "恭喜！您的得分达到了高度专门人才快速通道水平（80分以上）"
    };
  } else if (totalPoints >= pointThresholds.highlySkilled) {
    return {
      qualified: true,
      level: "highlySkilled",
      message: "恭喜！您的得分达到了高度专门人才水平（70分以上）"
    };
  } else {
    return {
      qualified: false,
      level: "notQualified",
      message: "您的得分未达到高度专门人才签证要求（低于70分）"
    };
  }
};
