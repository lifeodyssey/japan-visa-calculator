
export const zh = {
  title: '日本高度专门人才积分计算器',
  subtitle: '根据日本出入国在留管理厅公布的高度专门人才评分标准，计算您的积分是否符合高度专门人才签证要求',
  currentPoints: '当前总分',
  targetPoints: '目标分数',

  // 签证类别
  categories: {
    title: '选择签证类别',
    description: '请选择最符合您在日本预期活动的类别',
    minimumSalary: '最低年收',
    minimumSalaryTooltip: '最低年收入要求：{amount}万日元',
    salaryRequirement: '最低年收入要求：{amount}',

    academic: {
      name: '高度学术研究分野',
      description: '在大学、研究机构或类似组织从事研究活动',
      detailsTitle: '学术研究类别详情',
      details: '适用于研究人员、教授和从事学术研究活动的专业人士',
      researchNote: '可通过研究成果获得额外积分'
    },

    specialized: {
      name: '高度专门・技术分野',
      description: '需要专门知识或技能的专业活动',
      detailsTitle: '专门技术类别详情',
      details: '适用于工程师、IT专业人士、专家和其他技术专家'
    },

    management: {
      name: '高度经营・管理分野',
      description: '企业经营和管理活动',
      detailsTitle: '经营管理类别详情',
      details: '适用于高管、管理人员和担任管理职位的商业领导者'
    }
  },
  academic: {
    title: '1. 学历背景',
    description: '请选择您的最高学历'
  },
  career: {
    title: '2. 专业工作经验',
    description: '请选择您相关领域的工作年限'
  },
  salary: {
    title: '3. 年收入水平',
    description: '请选择您的年收入范围（日元）'
  },
  age: {
    title: '4. 年龄',
    description: '请选择您的年龄段'
  },
  japanese: {
    title: '5. 日语能力',
    description: '请选择您的日语水平'
  },
  bonusPoints: '额外加分项目',
  evaluationTitle: '评估结果',
  disclaimer: '注：本计算器仅供参考，最终认定以日本出入国在留管理厅为准。',
  copyright: '日本高度专门人才积分计算器',
  benefits: {
    title: '高度专门人才签证优势:',
    items: [
      '5年后可申请永久居留（普通工作签证通常需要10年）',
      '配偶可在日本工作（无需工作许可）',
      '可携带父母来日本（在特定条件下）',
      '可聘请家政人员（在特定条件下）',
      '行政手续简化'
    ]
  },
  printSummary: '打印摘要',
  printDate: '日期',
  printPoints: '总积分',
  printStatus: '状态',
  compare: '比较',
  compareTitle: '比较选择',
  currentSelection: '当前选择',
  compareSelection: '比较选择',
  apply: '应用',
  reset: '重置',
  save: '保存',
  share: '分享',
  print: '打印',
  resetSuccess: '重置成功',
  resetDescription: '所有选择已清除',
  saveSuccess: '保存成功',
  saveDescription: '所有选择已保存',
  shareText: '我的日本签证积分：',
  points: '分',
  copySuccess: '已复制到剪贴板',
  copyDescription: '分享文本已复制到剪贴板',
  createdBy: '创建者：',
  
  // Academic points labels
  doctor: '博士学位',
  master: '硕士学位',
  bachelor: '学士学位',
  
  // Career points labels
  '10plus': '10年以上',
  '7to9': '7年至9年',
  '5to6': '5年至6年',
  '3to4': '3年至4年',
  'less3': '3年以下',
  
  // Salary points labels
  'salary10M': '1000万日元以上',
  'salary9M': '900万至1000万日元',
  'salary8M': '800万至900万日元',
  'salary7M': '700万至800万日元',
  'salary6M': '600万至700万日元',
  'salary5M': '500万至600万日元',
  'salary4M': '400万至500万日元',
  'salary3M': '300万至400万日元',
  'salaryLess3M': '300万日元以下',
  
  // Age points labels
  'age29': '29岁以下',
  'age30to34': '30至34岁',
  'age35to39': '35至39岁',
  'age40plus': '40岁及以上',
  
  // Japanese language proficiency labels
  'jlptN1': 'JLPT N1级或BJT商务日语480分以上',
  'jlptN2': 'JLPT N2级或BJT商务日语400至479分',
  'noJapanese': '无日语能力证明',
  
  // Result messages
  'fastTrackMessage': '恭喜！您的得分达到了高度专门人才快速通道水平（80分以上）',
  'highlySkillMessage': '恭喜！您的得分达到了高度专门人才水平（70分以上）',
  'notQualifiedMessage': '您的得分未达到高度专门人才签证要求（低于70分）',
  
  // Detailed Bonus Points (15 categories)
  bonus: {
    research: {
      title: '研究成果'
    },
    position: {
      title: '高管职位'
    },
    qualification: {
      title: '专业资格'
    },
    innovation: {
      title: '创新支援・中小企业'
    },
    language: {
      title: '语言能力'
    },
    education: {
      title: '教育・培训'
    },
    investment: {
      title: '投资・经营'
    },
    special: {
      title: '特殊项目'
    },
    '01': {
      name: 'ボーナス① 研究成果',
      description: '专门技术和经营管理类别的研究成果（类似学术类别标准）'
    },
    '02': {
      name: 'ボーナス② 高管职位',
      description: '代表董事、代表执行役或执行役（仅限经营管理类别）'
    },
    '03': {
      name: 'ボーナス③ 外国专业资格',
      description: '相关外国资格（如美国CPA、外国律师资格、精算师资格、设计奖项等）'
    },
    '04': {
      name: 'ボーナス④ 创新促进支援',
      description: '在接受创新促进支援措施的机构工作'
    },
    '04_sme': {
      name: 'ボーナス④ 中小企业额外奖励',
      description: '如果机构是中小企业，额外获得10分'
    },
    '05': {
      name: 'ボーナス⑤ 高研发比例中小企业',
      description: '在研发费用比例超过3%的中小企业工作'
    },
    '06': {
      name: 'ボーナス⑥ 日本国家资格',
      description: '持有相关日本国家资格（每个资格5分，最多10分）'
    },
    '07': {
      name: 'ボーナス⑦ 日本高等教育学位',
      description: '在日本高等教育机构获得学位'
    },
    '08': {
      name: 'ボーナス⑧ 日语N1级',
      description: 'JLPT N1或同等水平（BJT 480+，或外国大学日语专业毕业）'
    },
    '09': {
      name: 'ボーナス⑨ 日语N2级',
      description: 'JLPT N2或同等水平（BJT 400+）- 不能与⑦或⑧同时申请'
    },
    '10': {
      name: 'ボーナス⑩ 成长领域先进项目',
      description: '从事指定成长领域的先进项目'
    },
    '11': {
      name: 'ボーナス⑪ 指定大学毕业',
      description: '从法务大臣指定的大学毕业（世界排名、超级全球大学等）'
    },
    '12': {
      name: 'ボーナス⑫ 指定培训完成',
      description: '完成法务大臣指定的培训（如培训在日本机构进行则不能与⑦同时申请）'
    },
    '13': {
      name: 'ボーナス⑬ 企业投资1亿日元以上',
      description: '在管理的企业中投资1亿日元以上（仅限经营管理类别）'
    },
    '14': {
      name: 'ボーナス⑭ 投资管理业务',
      description: '从事国际金融中心措施相关的投资管理业务'
    },
    '15': {
      name: 'ボーナス⑮ 地方政府支援',
      description: '在接受地方政府高度人才接收支援的机构工作'
    }
  },

  // Legacy bonus points (for backward compatibility)
  'bonus1.label': '①在日本指定的大学获得学位',
  'bonus1.description': '从日本文部科学省指定的大学获得学士/硕士/博士学位',
  'bonus2.label': '②在世界前300名大学获得学位',
  'bonus2.description': '从世界QS排名前300名的大学获得学士/硕士/博士学位',
  'bonus3.label': '③具有高级专业职业资格',
  'bonus3.description': '持有日本认可的高级专业职业资格证书（如法务大臣指定的资格）',
  'bonus4.label': '④在成长企业工作',
  'bonus4.description': '在日本经济产业省认定的成长企业就职',
  'bonus5.label': '⑤创新性研究成果',
  'bonus5.description': '作为发明人获得相关专利，或在专业期刊发表研究论文',
  'bonus6.label': '⑥高级日语能力',
  'bonus6.description': 'JLPT N1级或BJT商务日语考试480分以上',
  'bonus7.label': '⑦高级英语能力',
  'bonus7.description': 'TOEIC分数780分以上或同等水平',
  'bonus8.label': '⑧年收入超过1500万日元',
  'bonus8.description': '年收入（含奖金）超过1500万日元',
  'bonus9.label': '⑨年收入超过1000万日元',
  'bonus9.description': '年收入（含奖金）超过1000万日元',
  'bonus10.label': '⑩在国家战略特区就业',
  'bonus10.description': '在日本政府指定的国家战略特区内就业',
  'bonus11.label': '⑪具有投资经营管理经验',
  'bonus11.description': '过去3年内有投资或经营管理经验',
  'bonus12.label': '⑫获得日本政府表彰',
  'bonus12.description': '获得日本政府相关部门颁发的表彰或奖项',
  'bonus13.label': '⑬在日本注册特定创新活动',
  'bonus13.description': '在日本注册为特定创新活动实施者',
  'bonus14.label': '⑭完成大学院研究生课程',
  'bonus14.description': '在日本完成研究生课程学习（包括MBA等）',
  'bonus15.label': '⑮在特定研究机构工作',
  'bonus15.description': '在日本指定的研究机构从事研究工作'
};
