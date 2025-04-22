
// Japan's Highly-Skilled Foreign Professional Bonus Points System

export const bonusAcademicPoints = [
  { 
    id: "bonus1", 
    label: "①在日本指定的大学获得学位", 
    description: "从日本文部科学省指定的大学获得学士/硕士/博士学位",
    points: 10 
  },
  { 
    id: "bonus2", 
    label: "②在世界前300名大学获得学位", 
    description: "从世界QS排名前300名的大学获得学士/硕士/博士学位",
    points: 10 
  },
];

export const bonusCareerPoints = [
  { 
    id: "bonus3", 
    label: "③具有高级专业职业资格", 
    description: "持有日本认可的高级专业职业资格证书（如法务大臣指定的资格）",
    points: 5 
  },
  { 
    id: "bonus4", 
    label: "④在成长企业工作", 
    description: "在日本经济产业省认定的成长企业就职",
    points: 10 
  },
  { 
    id: "bonus5", 
    label: "⑤创新性研究成果", 
    description: "作为发明人获得相关专利，或在专业期刊发表研究论文",
    points: 20 
  },
];

export const bonusLanguagePoints = [
  { 
    id: "bonus6", 
    label: "⑥高级日语能力", 
    description: "JLPT N1级或BJT商务日语考试480分以上",
    points: 15 
  },
  { 
    id: "bonus7", 
    label: "⑦高级英语能力", 
    description: "TOEIC分数780分以上或同等水平",
    points: 10 
  },
];

export const bonusSalaryPoints = [
  { 
    id: "bonus8", 
    label: "⑧年收入超过1500万日元", 
    description: "年收入（含奖金）超过1500万日元",
    points: 10 
  },
  { 
    id: "bonus9", 
    label: "⑨年收入超过1000万日元", 
    description: "年收入（含奖金）超过1000万日元",
    points: 5 
  },
];

export const bonusSpecialPoints = [
  { 
    id: "bonus10", 
    label: "⑩在国家战略特区就业", 
    description: "在日本政府指定的国家战略特区内就业",
    points: 10 
  },
  { 
    id: "bonus11", 
    label: "⑪具有投资经营管理经验", 
    description: "过去3年内有投资或经营管理经验",
    points: 5 
  },
  { 
    id: "bonus12", 
    label: "⑫获得日本政府表彰", 
    description: "获得日本政府相关部门颁发的表彰或奖项",
    points: 10 
  },
  { 
    id: "bonus13", 
    label: "⑬在日本注册特定创新活动", 
    description: "在日本注册为特定创新活动实施者",
    points: 10 
  },
  { 
    id: "bonus14", 
    label: "⑭完成大学院研究生课程", 
    description: "在日本完成研究生课程学习（包括MBA等）",
    points: 5 
  },
  { 
    id: "bonus15", 
    label: "⑮在特定研究机构工作", 
    description: "在日本指定的研究机构从事研究工作",
    points: 10 
  },
];

export const allBonusPoints = [
  ...bonusAcademicPoints,
  ...bonusCareerPoints,
  ...bonusLanguagePoints,
  ...bonusSalaryPoints,
  ...bonusSpecialPoints,
];
