
export const en = {
  title: 'Japan Highly-Skilled Professional Points Calculator',
  subtitle: 'Calculate your points based on Immigration Bureau of Japan standards for Highly-Skilled Professional visa',
  currentPoints: 'Current Points',
  targetPoints: 'Target Points',

  // Visa Categories
  categories: {
    title: 'Select Visa Category',
    description: 'Choose the category that best matches your intended activities in Japan',
    minimumSalary: 'Min Salary',
    minimumSalaryTooltip: 'Minimum annual salary: {amount} million JPY',
    salaryRequirement: 'Minimum annual salary requirement: {amount}',

    academic: {
      name: 'Advanced Academic Research',
      description: 'Research activities at universities, research institutes, or similar organizations',
      detailsTitle: 'Academic Research Category Details',
      details: 'For researchers, professors, and academic professionals engaged in research activities',
      researchNote: 'Research achievements section available for additional points'
    },

    specialized: {
      name: 'Advanced Specialized/Technical',
      description: 'Professional activities requiring specialized knowledge or skills',
      detailsTitle: 'Specialized/Technical Category Details',
      details: 'For engineers, IT professionals, specialists, and other technical experts'
    },

    management: {
      name: 'Advanced Business Management',
      description: 'Business management and administration activities',
      detailsTitle: 'Business Management Category Details',
      details: 'For executives, managers, and business leaders in management positions'
    }
  },
  academic: {
    title: '1. Academic Background',
    description: 'Please select your highest academic qualification'
  },
  career: {
    title: '2. Professional Experience',
    description: 'Please select your years of relevant work experience'
  },
  salary: {
    title: '3. Annual Income',
    description: 'Please select your annual income range (in JPY)'
  },
  age: {
    title: '4. Age',
    description: 'Please select your age group'
  },
  japanese: {
    title: '5. Japanese Language Proficiency',
    description: 'Please select your Japanese language level'
  },
  bonusPoints: 'Bonus Points Items',
  bonusAcademic: 'Academic-related Bonus',
  bonusCareer: 'Career-related Bonus',
  bonusLanguage: 'Language Proficiency Bonus',
  bonusSalary: 'Income-related Bonus',
  bonusSpecial: 'Special Achievement Bonus',
  evaluationTitle: 'Evaluation Result',
  disclaimer: 'Note: This calculator is for reference only. Final determination is subject to Immigration Bureau of Japan.',
  copyright: 'Japan Highly-Skilled Professional Points Calculator',
  benefits: {
    title: 'Benefits of Highly-Skilled Professional Visa:',
    items: [
      'Permanent residency application after 5 years (vs. 10 years for regular work visa)',
      'Spouse can work in Japan (no work permit required)',
      'Possibility to bring parents to Japan (under specific conditions)',
      'Permission to hire domestic workers (under specific conditions)',
      'Simplified administrative procedures'
    ]
  },
  printSummary: 'Print Summary',
  printDate: 'Date',
  printPoints: 'Total Points',
  printStatus: 'Status',
  compare: 'Compare',
  compareTitle: 'Compare Selections',
  currentSelection: 'Current Selection',
  compareSelection: 'Compare Selection',
  apply: 'Apply',
  reset: 'Reset',
  save: 'Save',
  share: 'Share',
  print: 'Print',
  resetSuccess: 'Reset Successful',
  resetDescription: 'All selections have been cleared',
  saveSuccess: 'Save Successful',
  saveDescription: 'Your selections have been saved',
  shareText: 'My Japan Visa Points:',
  points: 'points',
  copySuccess: 'Copied to Clipboard',
  copyDescription: 'Share text has been copied to your clipboard',
  createdBy: 'Created by',
  
  // Academic points labels
  doctor: 'Doctoral Degree',
  master: 'Master\'s Degree',
  bachelor: 'Bachelor\'s Degree',
  
  // Career points labels
  '10plus': '10+ years',
  '7to9': '7-9 years',
  '5to6': '5-6 years',
  '3to4': '3-4 years',
  'less3': 'Less than 3 years',
  
  // Salary points labels
  'salary10M': 'Over 10 million yen',
  'salary9M': '9-10 million yen',
  'salary8M': '8-9 million yen',
  'salary7M': '7-8 million yen',
  'salary6M': '6-7 million yen',
  'salary5M': '5-6 million yen',
  'salary4M': '4-5 million yen',
  'salary3M': '3-4 million yen',
  'salaryLess3M': 'Less than 3 million yen',
  
  // Age points labels
  'age29': 'Under 30 years old',
  'age30to34': '30-34 years old',
  'age35to39': '35-39 years old',
  'age40plus': '40 years old or older',
  
  // Japanese language proficiency labels
  'jlptN1': 'JLPT N1 or BJT 480+',
  'jlptN2': 'JLPT N2 or BJT 400-479',
  'noJapanese': 'No Japanese proficiency',
  
  // Result messages
  'fastTrackMessage': 'Congratulations! You qualify for the Fast Track (80+ points)',
  'highlySkillMessage': 'Congratulations! You qualify as a Highly-Skilled Professional (70+ points)',
  'notQualifiedMessage': 'You do not yet qualify for the Highly-Skilled Professional visa (below 70 points)',
  
  // Detailed Bonus Points (15 categories)
  bonus: {
    '01': {
      name: 'ボーナス① Research Achievements',
      description: 'Research achievements for Specialized/Technical and Management categories (similar to Academic category criteria)'
    },
    '02': {
      name: 'ボーナス② Executive Position',
      description: 'Representative Director, Representative Executive Officer, or Executive Officer (Management category only)'
    },
    '03': {
      name: 'ボーナス③ Foreign Professional Qualifications',
      description: 'Relevant foreign qualifications (e.g., US CPA, foreign lawyer qualifications, actuarial qualifications, design awards)'
    },
    '04': {
      name: 'ボーナス④ Innovation Promotion Support',
      description: 'Working at institution receiving innovation promotion support measures'
    },
    '04_sme': {
      name: 'ボーナス④ Additional SME Bonus',
      description: 'Additional 10 points if the institution is a Small and Medium-sized Enterprise (SME)'
    },
    '05': {
      name: 'ボーナス⑤ SME with High R&D Ratio',
      description: 'Working at SME with R&D expenses ratio over 3%'
    },
    '06': {
      name: 'ボーナス⑥ Japanese National Qualifications',
      description: 'Holding relevant Japanese national qualifications (5 points per qualification, max 10 points)'
    },
    '07': {
      name: 'ボーナス⑦ Japanese Higher Education Degree',
      description: 'Degree obtained from a Japanese higher education institution'
    },
    '08': {
      name: 'ボーナス⑧ Japanese Language N1',
      description: 'JLPT N1 or equivalent (BJT 480+, or graduated from foreign university majoring in Japanese)'
    },
    '09': {
      name: 'ボーナス⑨ Japanese Language N2',
      description: 'JLPT N2 or equivalent (BJT 400+) - cannot be claimed with ⑦ or ⑧'
    },
    '10': {
      name: 'ボーナス⑩ Growth Sector Advanced Projects',
      description: 'Engaged in advanced projects in designated growth sectors'
    },
    '11': {
      name: 'ボーナス⑪ Designated University Graduate',
      description: 'Graduated from university designated by Minister of Justice (world rankings, Super Global University, etc.)'
    },
    '12': {
      name: 'ボーナス⑫ Designated Training Completion',
      description: 'Completed training designated by Minister of Justice (excludes those with ⑦ if training was at JP institution)'
    },
    '13': {
      name: 'ボーナス⑬ Business Investment 100M+ JPY',
      description: 'Investment of 100 million JPY or more in managed business (Management category only)'
    },
    '14': {
      name: 'ボーナス⑭ Investment Management Business',
      description: 'Engaged in investment management business for international financial center measures'
    },
    '15': {
      name: 'ボーナス⑮ Local Government Support',
      description: 'Working at institution receiving local government support for HSP acceptance'
    }
  },

  // Research Achievements (Academic category)
  research: {
    categories: {
      patent: {
        name: 'Patent Achievements',
        description: 'Patents where applicant is the inventor'
      },
      grant: {
        name: 'Research Grants',
        description: 'Public research grants obtained before entry to Japan'
      },
      publication: {
        name: 'Academic Publications',
        description: 'Research papers published in recognized academic journals'
      },
      award: {
        name: 'Research Awards',
        description: 'Prestigious research awards recognized by Minister of Justice'
      }
    },
    patent: {
      invention: {
        name: 'Patent Invention (1+ items)',
        description: 'Patented invention where applicant is the inventor',
        details: 'Must be registered patent with applicant listed as inventor'
      }
    },
    grant: {
      public: {
        name: 'Public Research Grant',
        description: 'Research grant from recognized public institution',
        details: 'Grant must be obtained before entry to Japan from recognized public institution'
      }
    },
    publication: {
      papers: {
        name: 'Academic Papers (3+ papers)',
        description: 'Research papers as responsible author in recognized journals',
        details: 'Must be published in academic journals registered in databases used by Japanese national institutions'
      }
    },
    award: {
      prestigious: {
        name: 'Prestigious Research Award',
        description: 'Significant research achievement award',
        details: 'Award must be recognized by Minister of Justice after consultation with relevant agencies'
      }
    },
    validation: {
      multiple_achievements_bonus: 'Special bonus: 25 points total for 2+ research achievements',
      too_many_selections: 'Warning: Consider selecting only your strongest achievements'
    }
  }
};
