// Japan Highly Skilled Professional Visa Categories
// 日本高度人才签证类别定义

export type VisaCategory = 'academic' | 'specialized' | 'management';

export interface VisaCategoryInfo {
  id: VisaCategory;
  nameKey: string;
  descriptionKey: string;
  minimumSalary?: number; // in JPY, undefined means no minimum
  careerPointsTable: string; // reference to career points table
  salaryPointsTable: string; // reference to salary points table
}

export const visaCategories: VisaCategoryInfo[] = [
  {
    id: 'academic',
    nameKey: 'categories.academic.name',
    descriptionKey: 'categories.academic.description',
    minimumSalary: undefined, // No minimum salary requirement
    careerPointsTable: 'academic',
    salaryPointsTable: 'academic'
  },
  {
    id: 'specialized',
    nameKey: 'categories.specialized.name', 
    descriptionKey: 'categories.specialized.description',
    minimumSalary: 3000000, // 3 million JPY minimum
    careerPointsTable: 'specialized',
    salaryPointsTable: 'specialized'
  },
  {
    id: 'management',
    nameKey: 'categories.management.name',
    descriptionKey: 'categories.management.description', 
    minimumSalary: 3000000, // 3 million JPY minimum
    careerPointsTable: 'management',
    salaryPointsTable: 'management'
  }
];

// Career points by category
export const careerPointsByCategory = {
  academic: [
    { id: "career_academic_7plus", years: "7+", points: 15 },
    { id: "career_academic_5to6", years: "5-6", points: 10 },
    { id: "career_academic_3to4", years: "3-4", points: 5 },
    { id: "career_academic_less3", years: "<3", points: 0 }
  ],
  specialized: [
    { id: "career_specialized_10plus", years: "10+", points: 20 },
    { id: "career_specialized_7to9", years: "7-9", points: 15 },
    { id: "career_specialized_5to6", years: "5-6", points: 10 },
    { id: "career_specialized_3to4", years: "3-4", points: 5 },
    { id: "career_specialized_less3", years: "<3", points: 0 }
  ],
  management: [
    { id: "career_management_10plus", years: "10+", points: 25 },
    { id: "career_management_7to9", years: "7-9", points: 20 },
    { id: "career_management_5to6", years: "5-6", points: 15 },
    { id: "career_management_3to4", years: "3-4", points: 10 },
    { id: "career_management_less3", years: "<3", points: 0 }
  ]
};

// Academic background points by category
export const academicPointsByCategory = {
  academic: [
    { id: "academic_doctorate", level: "doctorate", points: 30, excludesProfessional: true },
    { id: "academic_master", level: "master", points: 20, includesProfessional: true },
    { id: "academic_bachelor", level: "bachelor", points: 10 },
    { id: "academic_multiple", level: "multiple", points: 5, description: "Multiple degrees in different fields" }
  ],
  specialized: [
    { id: "academic_doctorate_or_master", level: "doctorate_or_master", points: 20, professionalBonus: 5 },
    { id: "academic_bachelor", level: "bachelor", points: 10 },
    { id: "academic_multiple", level: "multiple", points: 5, description: "Multiple degrees in different fields" }
  ],
  management: [
    { id: "academic_doctorate_or_master", level: "doctorate_or_master", points: 20, professionalBonus: 5 },
    { id: "academic_bachelor", level: "bachelor", points: 10 },
    { id: "academic_multiple", level: "multiple", points: 5, description: "Multiple degrees in different fields" }
  ]
};

// Age groups for salary calculation
export const ageGroups = [
  { id: "age_under30", range: "Under 30", minAge: 0, maxAge: 29 },
  { id: "age_30to34", range: "30-34", minAge: 30, maxAge: 34 },
  { id: "age_35to39", range: "35-39", minAge: 35, maxAge: 39 },
  { id: "age_40plus", range: "40+", minAge: 40, maxAge: 999 }
];

export const getVisaCategoryById = (id: VisaCategory): VisaCategoryInfo | undefined => {
  return visaCategories.find(category => category.id === id);
};

export const getCareerPointsForCategory = (category: VisaCategory) => {
  return careerPointsByCategory[category] || [];
};

export const getAcademicPointsForCategory = (category: VisaCategory) => {
  return academicPointsByCategory[category] || [];
};
