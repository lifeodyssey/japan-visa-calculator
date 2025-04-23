export type Language = 'zh' | 'en' | 'ja';

export const translations = {
  zh: {
    title: '日本高度专门人才积分计算器',
    subtitle: '根据日本出入国在留管理厅公布的高度专门人才评分标准，计算您的积分是否符合高度专门人才签证要求',
    currentPoints: '当前总分',
    targetPoints: '目标分数',
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
    bonusAcademic: '学历相关加分',
    bonusCareer: '职业相关加分',
    bonusLanguage: '语言能力加分',
    bonusSalary: '收入相关加分',
    bonusSpecial: '特殊加分项目',
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
    
    // Bonus points
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
  },
  en: {
    title: 'Japan Highly-Skilled Professional Points Calculator',
    subtitle: 'Calculate your points based on Immigration Bureau of Japan standards for Highly-Skilled Professional visa',
    currentPoints: 'Current Points',
    targetPoints: 'Target Points',
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
    
    // Bonus points
    'bonus1.label': '① Degree from Designated Japanese University',
    'bonus1.description': 'Bachelor/Master/Doctoral degree from a university designated by MEXT Japan',
    'bonus2.label': '② Degree from Top 300 University',
    'bonus2.description': 'Bachelor/Master/Doctoral degree from a university in the QS World Top 300',
    'bonus3.label': '③ Advanced Professional Qualification',
    'bonus3.description': 'Hold an advanced professional qualification recognized in Japan',
    'bonus4.label': '④ Employment in Growth Company',
    'bonus4.description': 'Work for a company designated as a growth company by METI Japan',
    'bonus5.label': '⑤ Innovative Research Achievement',
    'bonus5.description': 'Patent holder or published research papers in professional journals',
    'bonus6.label': '⑥ Advanced Japanese Proficiency',
    'bonus6.description': 'JLPT N1 or BJT Business Japanese Test score over 480',
    'bonus7.label': '⑦ Advanced English Proficiency',
    'bonus7.description': 'TOEIC score over 780 or equivalent',
    'bonus8.label': '⑧ Annual Income over 15 million yen',
    'bonus8.description': 'Annual income (including bonuses) over 15 million yen',
    'bonus9.label': '⑨ Annual Income over 10 million yen',
    'bonus9.description': 'Annual income (including bonuses) over 10 million yen',
    'bonus10.label': '⑩ Employment in National Strategic Zone',
    'bonus10.description': 'Work in a National Strategic Special Zone designated by the Japanese government',
    'bonus11.label': '⑪ Investment/Management Experience',
    'bonus11.description': 'Investment or management experience within the last 3 years',
    'bonus12.label': '⑫ Received Japanese Government Award',
    'bonus12.description': 'Received an award from a Japanese government agency',
    'bonus13.label': '⑬ Registered for Specific Innovation Activities',
    'bonus13.description': 'Registered as a practitioner of specific innovation activities in Japan',
    'bonus14.label': '⑭ Completed Graduate School Program',
    'bonus14.description': 'Completed a graduate program in Japan (including MBA)',
    'bonus15.label': '⑮ Working in Designated Research Institution',
    'bonus15.description': 'Work in a research institution designated by the Japanese government'
  },
  ja: {
    title: '日本高度専門職ポイント計算ツール',
    subtitle: '出入国在留管理庁の高度専門職ポイント制の基準に基づき、あなたのポイントを計算します',
    currentPoints: '現在の合計点数',
    targetPoints: '目標点数',
    academic: {
      title: '1. 学歴',
      description: '最終学歴を選択してください'
    },
    career: {
      title: '2. 職歴',
      description: '関連する職務経験年数を選択してください'
    },
    salary: {
      title: '3. 年収',
      description: '年収範囲を選択してください（円）'
    },
    age: {
      title: '4. 年齢',
      description: '年齢層を選択してください'
    },
    japanese: {
      title: '5. 日本語能力',
      description: '日本語レベルを選択してください'
    },
    bonusPoints: 'ボーナスポイント項目',
    bonusAcademic: '学歴関連ボーナス',
    bonusCareer: '職歴関連ボーナス',
    bonusLanguage: '語学力ボーナス',
    bonusSalary: '年収関連ボーナス',
    bonusSpecial: '特別加算項目',
    evaluationTitle: '評価結果',
    disclaimer: '注：このツールは参考用です。最終的な判断は出入国在留管理庁による審査に基づきます。',
    copyright: '日本高度専門職ポイント計算ツール',
    benefits: {
      title: '高度専門職ビザの特典：',
      items: [
        '5年後の永住許可申請が可能（一般の就労ビザは10年）',
        '配偶者の就労が可能（就労許可不要）',
        '一定条件下で親の帯同が可能',
        '一定条件下で家事使用人の帯同が可能',
        '各種手続きの優遇措置'
      ]
    },
    printSummary: '印刷サマリー',
    printDate: '日付',
    printPoints: '合計ポイント',
    printStatus: 'ステータス',
    compare: '比較',
    compareTitle: '選択の比較',
    currentSelection: '現在の選択',
    compareSelection: '比較選択',
    apply: '適用',
    reset: 'リセット',
    save: '保存',
    share: '共有',
    print: '印刷',
    resetSuccess: 'リセット成功',
    resetDescription: 'すべての選択がクリアされました',
    saveSuccess: '保存成功',
    saveDescription: '選択が保存されました',
    shareText: '私の日本ビザポイント：',
    points: 'ポイント',
    copySuccess: 'クリップボードにコピーしました',
    copyDescription: '共有テキストがクリップボードにコピーされました',
    createdBy: '制作者：',
    
    // Academic points labels
    doctor: '博士号',
    master: '修士号',
    bachelor: '学士号',
    
    // Career points labels
    '10plus': '10年以上',
    '7to9': '7〜9年',
    '5to6': '5〜6年',
    '3to4': '3〜4年',
    'less3': '3年未満',
    
    // Salary points labels
    'salary10M': '1000万円以上',
    'salary9M': '900万〜1000万円',
    'salary8M': '800万〜900万円',
    'salary7M': '700万〜800万円',
    'salary6M': '600万〜700万円',
    'salary5M': '500万〜600万円',
    'salary4M': '400万〜500万円',
    'salary3M': '300万〜400万円',
    'salaryLess3M': '300万円未満',
    
    // Age points labels
    'age29': '29歳以下',
    'age30to34': '30〜34歳',
    'age35to39': '35〜39歳',
    'age40plus': '40歳以上',
    
    // Japanese language proficiency labels
    'jlptN1': 'JLPT N1またはBJT 480点以上',
    'jlptN2': 'JLPT N2またはBJT 400〜479点',
    'noJapanese': '日本語能力証明なし',
    
    // Result messages
    'fastTrackMessage': 'おめでとうございます！高度専門職ファストトラックに適格です（80点以上）',
    'highlySkillMessage': 'おめでとうございます！高度専門職に適格です（70点以上）',
    'notQualifiedMessage': '高度専門職ビザの要件を満たしていません（70点未満）',
    
    // Bonus points
    'bonus1.label': '①指定された日本の大学で学位取得',
    'bonus1.description': '文部科学省が指定した大学で学士/修士/博士号を取得',
    'bonus2.label': '②世界トップ300大学で学位取得',
    'bonus2.description': 'QS世界大学ランキングトップ300位内の大学で学士/修士/博士号を取得',
    'bonus3.label': '③高度専門職資格保有',
    'bonus3.description': '日本で認められた高度専門職資格を保持（法務大臣が指定した資格など）',
    'bonus4.label': '④成長企業での就労',
    'bonus4.description': '経済産業省が指定した成長企業での就労',
    'bonus5.label': '⑤革新的研究成果',
    'bonus5.description': '発明者として特許を取得、または専門誌で研究論文を発表',
    'bonus6.label': '⑥高度な日本語能力',
    'bonus6.description': 'JLPT N1またはBJTビジネス日本語テスト480点以上',
    'bonus7.label': '⑦高度な英語能力',
    'bonus7.description': 'TOEIC 780点以上または同等レベル',
    'bonus8.label': '⑧年収1500万円超',
    'bonus8.description': '年収（ボーナス含む）が1500万円を超える',
    'bonus9.label': '⑨年収1000万円超',
    'bonus9.description': '年収（ボーナス含む）が1000万円を超える',
    'bonus10.label': '⑩国家戦略特区での就労',
    'bonus10.description': '日本政府が指定した国家戦略特区内での就労',
    'bonus11.label': '⑪投資・経営管理経験',
    'bonus11.description': '過去3年間に投資または経営管理の経験がある',
    'bonus12.label': '⑫日本政府からの表彰',
    'bonus12.description': '日本政府機関からの表彰または賞を受賞',
    'bonus13.label': '⑬特定イノベーション活動の登録',
    'bonus13.description': '日本で特定イノベーション活動の実施者として登録',
    'bonus14.label': '⑭大学院プログラム修了',
    'bonus14.description': '日本で大学院プログラムを修了（MBAなど含む）',
    'bonus15.label': '⑮指定研究機関での勤務',
    'bonus15.description': '日本政府が指定した研究機関での勤務'
  }
};
