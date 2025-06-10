// Detailed 15 Bonus Point Categories for Japan Highly Skilled Professional Visa
// 日本高度人才签证详细15项奖励积分

export interface BonusPointItem {
  id: string;
  bonusNumber: number; // ボーナス①, ボーナス②, etc.
  nameKey: string;
  descriptionKey: string;
  points: number;
  category: 'research' | 'position' | 'qualification' | 'innovation' | 'language' | 'education' | 'investment' | 'special';
  applicableCategories?: ('academic' | 'specialized' | 'management')[];
  mutuallyExclusive?: string[]; // IDs of other bonus points that cannot be selected together
  requiresValidation?: boolean; // Whether this requires external validation/documentation
  externalDocumentUrl?: string; // Link to official document list
}

// ボーナス① Research Achievements (for Specialized/Technical and Management)
export const bonus01_research: BonusPointItem = {
  id: "bonus01_research",
  bonusNumber: 1,
  nameKey: "bonus.01.name",
  descriptionKey: "bonus.01.description", 
  points: 15,
  category: 'research',
  applicableCategories: ['specialized', 'management'],
  requiresValidation: true
};

// ボーナス② Position (for Management)
export const bonus02_position: BonusPointItem = {
  id: "bonus02_position",
  bonusNumber: 2,
  nameKey: "bonus.02.name",
  descriptionKey: "bonus.02.description",
  points: 10,
  category: 'position',
  applicableCategories: ['management'],
  requiresValidation: true
};

// ボーナス③ Foreign Qualifications
export const bonus03_foreign_qualifications: BonusPointItem = {
  id: "bonus03_foreign_qualifications", 
  bonusNumber: 3,
  nameKey: "bonus.03.name",
  descriptionKey: "bonus.03.description",
  points: 5,
  category: 'qualification',
  requiresValidation: true,
  externalDocumentUrl: "https://www.moj.go.jp/isa/content/930001661.pdf"
};

// ボーナス④ Innovation Promotion Support Measures
export const bonus04_innovation_support: BonusPointItem = {
  id: "bonus04_innovation_support",
  bonusNumber: 4, 
  nameKey: "bonus.04.name",
  descriptionKey: "bonus.04.description",
  points: 10,
  category: 'innovation',
  requiresValidation: true,
  externalDocumentUrl: "https://www.moj.go.jp/isa/content/001383842.pdf"
};

// ボーナス④ Additional - SME with Innovation Support
export const bonus04_sme_additional: BonusPointItem = {
  id: "bonus04_sme_additional",
  bonusNumber: 4,
  nameKey: "bonus.04_sme.name",
  descriptionKey: "bonus.04_sme.description",
  points: 10,
  category: 'innovation',
  requiresValidation: true
};

// ボーナス⑤ SME with R&D Expenses Ratio > 3%
export const bonus05_sme_rd: BonusPointItem = {
  id: "bonus05_sme_rd",
  bonusNumber: 5,
  nameKey: "bonus.05.name",
  descriptionKey: "bonus.05.description", 
  points: 5,
  category: 'innovation',
  requiresValidation: true
};

// ボーナス⑥ Japanese National Qualifications
export const bonus06_jp_qualifications: BonusPointItem = {
  id: "bonus06_jp_qualifications",
  bonusNumber: 6,
  nameKey: "bonus.06.name",
  descriptionKey: "bonus.06.description",
  points: 10, // Up to 10 points (5 per qualification, max 2)
  category: 'qualification',
  requiresValidation: true
};

// ボーナス⑦ Degree from Japanese Higher Education Institution  
export const bonus07_jp_degree: BonusPointItem = {
  id: "bonus07_jp_degree",
  bonusNumber: 7,
  nameKey: "bonus.07.name",
  descriptionKey: "bonus.07.description",
  points: 10,
  category: 'education',
  mutuallyExclusive: ['bonus12_designated_training'], // Cannot claim both if training was at JP institution
  requiresValidation: true
};

// ボーナス⑧ Japanese Language Proficiency (N1)
export const bonus08_japanese_n1: BonusPointItem = {
  id: "bonus08_japanese_n1", 
  bonusNumber: 8,
  nameKey: "bonus.08.name",
  descriptionKey: "bonus.08.description",
  points: 15,
  category: 'language',
  mutuallyExclusive: ['bonus09_japanese_n2'],
  requiresValidation: true,
  externalDocumentUrl: "https://www.moj.go.jp/isa/content/930001664.pdf"
};

// ボーナス⑨ Japanese Language Proficiency (N2)
export const bonus09_japanese_n2: BonusPointItem = {
  id: "bonus09_japanese_n2",
  bonusNumber: 9, 
  nameKey: "bonus.09.name",
  descriptionKey: "bonus.09.description",
  points: 10,
  category: 'language',
  mutuallyExclusive: ['bonus08_japanese_n1', 'bonus07_jp_degree'],
  requiresValidation: true,
  externalDocumentUrl: "https://www.moj.go.jp/isa/content/930001664.pdf"
};

// ボーナス⑩ Advanced Projects in Growth Sectors
export const bonus10_growth_sectors: BonusPointItem = {
  id: "bonus10_growth_sectors",
  bonusNumber: 10,
  nameKey: "bonus.10.name", 
  descriptionKey: "bonus.10.description",
  points: 10,
  category: 'special',
  requiresValidation: true,
  externalDocumentUrl: "https://www.moj.go.jp/isa/content/001383845.pdf"
};

// ボーナス⑪ Designated University Graduate
export const bonus11_designated_university: BonusPointItem = {
  id: "bonus11_designated_university",
  bonusNumber: 11,
  nameKey: "bonus.11.name",
  descriptionKey: "bonus.11.description", 
  points: 10,
  category: 'education',
  requiresValidation: true,
  externalDocumentUrl: "https://www.moj.go.jp/isa/content/001335478.pdf"
};

// ボーナス⑫ Designated Training Completion
export const bonus12_designated_training: BonusPointItem = {
  id: "bonus12_designated_training",
  bonusNumber: 12,
  nameKey: "bonus.12.name",
  descriptionKey: "bonus.12.description",
  points: 5,
  category: 'education',
  mutuallyExclusive: ['bonus07_jp_degree'], // If training was at JP institution
  requiresValidation: true
};

// ボーナス⑬ Business Investment (100M+ JPY)
export const bonus13_business_investment: BonusPointItem = {
  id: "bonus13_business_investment", 
  bonusNumber: 13,
  nameKey: "bonus.13.name",
  descriptionKey: "bonus.13.description",
  points: 5,
  category: 'investment',
  applicableCategories: ['management'],
  requiresValidation: true
};

// ボーナス⑭ Investment Management Business
export const bonus14_investment_management: BonusPointItem = {
  id: "bonus14_investment_management",
  bonusNumber: 14,
  nameKey: "bonus.14.name",
  descriptionKey: "bonus.14.description", 
  points: 10,
  category: 'special',
  requiresValidation: true,
  externalDocumentUrl: "https://www.moj.go.jp/isa/content/001428992.pdf"
};

// ボーナス⑮ Local Government Support Measures
export const bonus15_local_government: BonusPointItem = {
  id: "bonus15_local_government",
  bonusNumber: 15,
  nameKey: "bonus.15.name",
  descriptionKey: "bonus.15.description",
  points: 10,
  category: 'special', 
  requiresValidation: true,
  externalDocumentUrl: "https://www.moj.go.jp/isa/content/001499775.pdf"
};

// All bonus points in order
export const allDetailedBonusPoints: BonusPointItem[] = [
  bonus01_research,
  bonus02_position, 
  bonus03_foreign_qualifications,
  bonus04_innovation_support,
  bonus04_sme_additional,
  bonus05_sme_rd,
  bonus06_jp_qualifications,
  bonus07_jp_degree,
  bonus08_japanese_n1,
  bonus09_japanese_n2,
  bonus10_growth_sectors,
  bonus11_designated_university,
  bonus12_designated_training,
  bonus13_business_investment,
  bonus14_investment_management,
  bonus15_local_government
];

// Group bonus points by category for better UI organization
export const bonusPointsByCategory = {
  research: [bonus01_research],
  position: [bonus02_position],
  qualification: [bonus03_foreign_qualifications, bonus06_jp_qualifications],
  innovation: [bonus04_innovation_support, bonus04_sme_additional, bonus05_sme_rd],
  language: [bonus08_japanese_n1, bonus09_japanese_n2],
  education: [bonus07_jp_degree, bonus11_designated_university, bonus12_designated_training],
  investment: [bonus13_business_investment],
  special: [bonus10_growth_sectors, bonus14_investment_management, bonus15_local_government]
};

export const getBonusPointsForCategory = (visaCategory: 'academic' | 'specialized' | 'management') => {
  return allDetailedBonusPoints.filter(bonus => 
    !bonus.applicableCategories || bonus.applicableCategories.includes(visaCategory)
  );
};
