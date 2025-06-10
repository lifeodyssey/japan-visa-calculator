// Research Achievements for Academic Research Category
// 学术研究分野的研究成果积分

export interface ResearchAchievement {
  id: string;
  nameKey: string;
  descriptionKey: string;
  points: number;
  category: 'patent' | 'grant' | 'publication' | 'award';
  requiresValidation: boolean;
  detailsKey?: string; // Additional details or requirements
}

// Patent achievements (申請人が発明者であるものに限る)
export const patentAchievements: ResearchAchievement[] = [
  {
    id: "research_patent_invention",
    nameKey: "research.patent.invention.name",
    descriptionKey: "research.patent.invention.description", 
    points: 20,
    category: 'patent',
    requiresValidation: true,
    detailsKey: "research.patent.invention.details"
  }
];

// Research grant achievements
export const grantAchievements: ResearchAchievement[] = [
  {
    id: "research_grant_public",
    nameKey: "research.grant.public.name", 
    descriptionKey: "research.grant.public.description",
    points: 15,
    category: 'grant',
    requiresValidation: true,
    detailsKey: "research.grant.public.details"
  }
];

// Publication achievements (3+ papers as responsible author)
export const publicationAchievements: ResearchAchievement[] = [
  {
    id: "research_publication_papers",
    nameKey: "research.publication.papers.name",
    descriptionKey: "research.publication.papers.description",
    points: 20, 
    category: 'publication',
    requiresValidation: true,
    detailsKey: "research.publication.papers.details"
  }
];

// Award achievements
export const awardAchievements: ResearchAchievement[] = [
  {
    id: "research_award_prestigious",
    nameKey: "research.award.prestigious.name",
    descriptionKey: "research.award.prestigious.description",
    points: 15,
    category: 'award', 
    requiresValidation: true,
    detailsKey: "research.award.prestigious.details"
  }
];

// All research achievements
export const allResearchAchievements: ResearchAchievement[] = [
  ...patentAchievements,
  ...grantAchievements, 
  ...publicationAchievements,
  ...awardAchievements
];

// Special calculation rule for research achievements
export const calculateResearchAchievementPoints = (selectedAchievements: string[]): number => {
  const selectedItems = allResearchAchievements.filter(achievement => 
    selectedAchievements.includes(achievement.id)
  );

  if (selectedItems.length === 0) {
    return 0;
  }

  // Special rule: If 2 or more achievements are selected, award 25 points total
  if (selectedItems.length >= 2) {
    return 25;
  }

  // If only 1 achievement, award its individual points
  return selectedItems[0].points;
};

// Get research achievements by category for UI organization
export const getResearchAchievementsByCategory = () => {
  return {
    patent: patentAchievements,
    grant: grantAchievements,
    publication: publicationAchievements, 
    award: awardAchievements
  };
};

// Validation helper
export const validateResearchAchievements = (selectedAchievements: string[]): {
  isValid: boolean;
  warnings: string[];
  points: number;
} => {
  const points = calculateResearchAchievementPoints(selectedAchievements);
  const warnings: string[] = [];

  if (selectedAchievements.length >= 2) {
    warnings.push("research.validation.multiple_achievements_bonus");
  }

  if (selectedAchievements.length > 4) {
    warnings.push("research.validation.too_many_selections");
  }

  return {
    isValid: true,
    warnings,
    points
  };
};

// Research achievement categories for Academic Research visa category
export const researchCategories = [
  {
    id: 'patent',
    nameKey: 'research.categories.patent.name',
    descriptionKey: 'research.categories.patent.description',
    achievements: patentAchievements
  },
  {
    id: 'grant', 
    nameKey: 'research.categories.grant.name',
    descriptionKey: 'research.categories.grant.description',
    achievements: grantAchievements
  },
  {
    id: 'publication',
    nameKey: 'research.categories.publication.name', 
    descriptionKey: 'research.categories.publication.description',
    achievements: publicationAchievements
  },
  {
    id: 'award',
    nameKey: 'research.categories.award.name',
    descriptionKey: 'research.categories.award.description', 
    achievements: awardAchievements
  }
];

// Helper to check if research achievements section should be shown
export const shouldShowResearchAchievements = (visaCategory: string): boolean => {
  return visaCategory === 'academic';
};

// Helper to get research achievement by ID
export const getResearchAchievementById = (id: string): ResearchAchievement | undefined => {
  return allResearchAchievements.find(achievement => achievement.id === id);
};
