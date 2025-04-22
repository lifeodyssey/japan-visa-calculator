
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
    }
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
    }
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
    }
  }
};
