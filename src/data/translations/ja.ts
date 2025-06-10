
export const ja = {
  title: '日本高度専門職ポイント計算ツール',
  subtitle: '出入国在留管理庁の高度専門職ポイント制の基準に基づき、あなたのポイントを計算します',
  currentPoints: '現在の合計点数',
  targetPoints: '目標点数',

  // ビザカテゴリー
  categories: {
    title: 'ビザカテゴリーを選択',
    description: '日本での予定活動に最も適したカテゴリーを選択してください',
    minimumSalary: '最低年収',
    minimumSalaryTooltip: '最低年収要件：{amount}万円',
    salaryRequirement: '最低年収要件：{amount}',

    academic: {
      name: '高度学術研究分野',
      description: '大学、研究機関等での研究活動',
      detailsTitle: '学術研究分野の詳細',
      details: '研究者、教授、学術研究活動に従事する専門家向け',
      researchNote: '研究実績により追加ポイント獲得可能'
    },

    specialized: {
      name: '高度専門・技術分野',
      description: '専門的知識や技能を要する専門的活動',
      detailsTitle: '専門技術分野の詳細',
      details: 'エンジニア、IT専門家、スペシャリスト、その他技術専門家向け'
    },

    management: {
      name: '高度経営・管理分野',
      description: '企業経営・管理活動',
      detailsTitle: '経営管理分野の詳細',
      details: '役員、管理職、経営管理職にある企業リーダー向け'
    }
  },
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
  
  // Detailed Bonus Points (15 categories)
  bonus: {
    research: {
      title: '研究実績'
    },
    position: {
      title: '役職'
    },
    qualification: {
      title: '専門資格'
    },
    innovation: {
      title: 'イノベーション・中小企業'
    },
    language: {
      title: '語学力'
    },
    education: {
      title: '教育・研修'
    },
    investment: {
      title: '投資・経営'
    },
    special: {
      title: '特別プログラム'
    },
    '01': {
      name: 'ボーナス① 研究実績',
      description: '高度専門・技術分野及び高度経営・管理分野における研究実績（学術研究分野の基準に類似）'
    },
    '02': {
      name: 'ボーナス② 役職',
      description: '代表取締役、代表執行役、又は取締役・執行役（高度経営・管理分野のみ）'
    },
    '03': {
      name: 'ボーナス③ 外国の資格等',
      description: '関連する外国の資格（米国CPA、外国弁護士資格、アクチュアリー資格、デザイン賞等）'
    },
    '04': {
      name: 'ボーナス④ イノベーション促進支援措置',
      description: 'イノベーション促進支援措置を受けている機関での就労'
    },
    '04_sme': {
      name: 'ボーナス④ 中小企業追加ボーナス',
      description: '機関が中小企業の場合、追加で10点'
    },
    '05': {
      name: 'ボーナス⑤ 試験研究費等比率が3％超の中小企業',
      description: '試験研究費等の比率が3％を超える中小企業での就労'
    },
    '06': {
      name: 'ボーナス⑥ 日本の国家資格',
      description: '関連する日本の国家資格の保有（1資格につき5点、最大10点）'
    },
    '07': {
      name: 'ボーナス⑦ 日本の高等教育機関での学位取得',
      description: '日本の高等教育機関において学位を取得'
    },
    '08': {
      name: 'ボーナス⑧ 日本語能力（N1レベル）',
      description: 'JLPT N1又は同等（BJT 480点以上、外国大学日本語専攻卒業等）'
    },
    '09': {
      name: 'ボーナス⑨ 日本語能力（N2レベル）',
      description: 'JLPT N2又は同等（BJT 400点以上）- ⑦又は⑧との重複不可'
    },
    '10': {
      name: 'ボーナス⑩ 成長分野における先端的事業',
      description: '指定された成長分野の先端的事業に従事'
    },
    '11': {
      name: 'ボーナス⑪ 法務大臣が告示で定める大学',
      description: '法務大臣が告示で定める大学の卒業（世界大学ランキング、スーパーグローバル大学等）'
    },
    '12': {
      name: 'ボーナス⑫ 法務大臣が告示で定める研修',
      description: '法務大臣が告示で定める研修の修了（日本の高等教育機関での研修の場合⑦との重複不可）'
    },
    '13': {
      name: 'ボーナス⑬ 経営する事業に1億円以上の投資',
      description: '経営する事業に1億円以上の投資（高度経営・管理分野のみ）'
    },
    '14': {
      name: 'ボーナス⑭ 投資運用業等',
      description: '国際金融センター実現措置に係る投資運用業等の業務に従事'
    },
    '15': {
      name: 'ボーナス⑮ 地方公共団体の支援措置',
      description: '地方公共団体における高度人材外国人の受入れ促進支援措置を受けている機関での就労'
    }
  },

  // Legacy bonus points (for backward compatibility)
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
};
