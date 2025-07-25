'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'zh';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    services: 'Services',
    aiEvaluation: 'AI Evaluation',
    diagnostic: 'Diagnostic',
    tutors: 'Tutors',
    getStarted: 'Get Started',
    
    // Hero section
    heroTitle: 'Elite college prep, now cost down.',
    heroDescription: 'We combine artificial intelligence and professional tutors to deliver elite college prep services for a longer time with cheaper price.',
    startAiEvaluation: 'Start AI Evaluation',
    runDiagnostic: 'Run Diagnostic',
    
    // Stats
    successRate: 'Success Rate',
    studentsHelped: 'Students Helped',
    universities: 'Universities',
    studentRating: 'Student Rating',
    
    // Features
    aiPoweredEvaluation: 'AI-Powered Evaluation',
    aiEvaluationDescription: 'Our advanced AI analyzes thousands of successful applications to give you precise insights into your college admission chances.',
    acceptanceProbability: 'Acceptance Probability',
    acceptanceProbabilityDesc: 'Get precise calculations of your admission chances at each university based on your unique profile and achievements.',
    smartMatching: 'Smart Matching',
    smartMatchingDesc: 'AI matches you with universities where you have the highest probability of acceptance and connects you with specialized tutors.',
    performanceAnalytics: 'Performance Analytics',
    performanceAnalyticsDesc: 'Track your application progress with detailed analytics and insights to optimize your strategy for maximum success.',
    
    // Diagnostic section
    comprehensiveDiagnostic: 'Comprehensive Diagnostic',
    diagnosticDescription: 'Identify your strengths and weaknesses with our AI-powered diagnostic tools that provide actionable insights for improvement.',
    resumeAnalysis: 'Resume Analysis',
    resumeAnalysisDesc: 'AI-powered evaluation of your resume with specific recommendations that our expert tutors will help you implement effectively.',
    essayFeedback: 'Essay Feedback',
    essayFeedbackDesc: 'Detailed analysis of your essays with actionable feedback that our expert tutors will guide you through improving step by step.',
    
    // Tutors section
    expertTutorsAwait: 'Expert Tutors Await',
    tutorsDescription: 'After your AI evaluation, connect with specialized tutors who know exactly how to address your weaknesses and maximize your chances of acceptance.',
    personalizedGuidance: 'Personalized Guidance',
    personalizedGuidanceDesc: 'Our expert tutors create customized strategies based on your AI evaluation to maximize your chances of acceptance at your target universities.',
    meetYourTutor: 'Meet Your Tutor',
    provenResults: 'Proven Results',
    provenResultsDesc: 'Our AI + tutor combination has helped thousands of students get into their dream schools. Join the success stories with our data-driven approach.',
    viewSuccessStories: 'View Success Stories',
    
    // CTA section
    readyToTransform: 'Ready to Transform Your Application?',
    ctaDescription: 'Start with our AI evaluation, get your comprehensive diagnostic report, and connect with expert tutors who know how to get you in.',
    startFreeEvaluation: 'Start Free Evaluation',
    learnMore: 'Learn More',
    
    // Footer
    companyName: 'COMMON PREP',
    footerDescription: 'AI-powered college admissions evaluation and expert tutoring to maximize your chances of getting into your dream university.',
    servicesFooter: 'Services',
    aiEvaluationFooter: 'AI Evaluation',
    diagnosticToolsFooter: 'Diagnostic Tools',
    expertTutoringFooter: 'Expert Tutoring',
    admissionsConsultingFooter: 'Admissions Consulting',
    companyFooter: 'Company',
    aboutUsFooter: 'About Us',
    ourTutorsFooter: 'Our Tutors',
    contactFooter: 'Contact',
    supportFooter: 'Support',
    resourcesFooter: 'Resources',
    blogFooter: 'Blog',
    admissionsGuidesFooter: 'Admissions Guides',
    successStoriesFooter: 'Success Stories',
    faqFooter: 'FAQ',
    allRightsReserved: '© 2025 Common Prep. All rights reserved.',
    privacyPolicy: 'Privacy Policy',
    termsOfService: 'Terms of Service',
    
    // Other sections
    trustedBy: 'Trusted by students from'
  },
  zh: {
    // Navigation
    services: '服務',
    aiEvaluation: 'AI評估',
    diagnostic: '診斷',
    tutors: '導師',
    getStarted: '開始',
    
    // Hero section
    heroTitle: '精英大學預備，現在成本更低。',
    heroDescription: '我們結合人工智能和專業導師，以更便宜的價格提供更長時間的精英大學預備服務。',
    startAiEvaluation: '開始AI評估',
    runDiagnostic: '執行診斷',
    
    // Stats
    successRate: '成功率',
    studentsHelped: '幫助學生',
    universities: '大學',
    studentRating: '學生評分',
    
    // Features
    aiPoweredEvaluation: 'AI驅動評估',
    aiEvaluationDescription: '我們的先進AI分析數千份成功申請，為您提供精確的大學錄取機會洞察。',
    acceptanceProbability: '錄取機率',
    acceptanceProbabilityDesc: '根據您獨特的個人資料和成就，精確計算您在每所大學的錄取機會。',
    smartMatching: '智慧配對',
    smartMatchingDesc: 'AI為您配對錄取機率最高的大學，並為您連接專業導師。',
    performanceAnalytics: '表現分析',
    performanceAnalyticsDesc: '透過詳細的分析和洞察追蹤您的申請進度，優化策略以獲得最大成功。',
    
    // Diagnostic section
    comprehensiveDiagnostic: '全面診斷',
    diagnosticDescription: '透過我們的AI診斷工具識別您的優勢和劣勢，提供可行的改進洞察。',
    resumeAnalysis: '履歷分析',
    resumeAnalysisDesc: 'AI驅動的履歷評估，提供具體建議，我們的專業導師將幫助您有效實施。',
    essayFeedback: '文書回饋',
    essayFeedbackDesc: '詳細分析您的文書並提供可行回饋，我們的專業導師將逐步指導您改進。',
    
    // Tutors section
    expertTutorsAwait: '專業導師等候您',
    tutorsDescription: '在您的AI評估後，與專業導師聯繫，他們確切知道如何解決您的弱點並最大化您的錄取機會。',
    personalizedGuidance: '個人化指導',
    personalizedGuidanceDesc: '我們的專業導師根據您的AI評估制定客製化策略，最大化您在目標大學的錄取機會。',
    meetYourTutor: '認識您的導師',
    provenResults: '驗證成果',
    provenResultsDesc: '我們的AI+導師組合已經幫助數千名學生進入理想學校。透過我們的數據驅動方法加入成功故事。',
    viewSuccessStories: '查看成功故事',
    
    // CTA section
    readyToTransform: '準備好改變您的申請了嗎？',
    ctaDescription: '從我們的AI評估開始，獲得全面的診斷報告，並與知道如何讓您被錄取的專業導師聯繫。',
    startFreeEvaluation: '開始免費評估',
    learnMore: '了解更多',
    
    // Footer
    companyName: 'COMMON PREP',
    footerDescription: 'AI驅動的大學入學評估和專業輔導，最大化您進入理想大學的機會。',
    servicesFooter: '服務',
    aiEvaluationFooter: 'AI評估',
    diagnosticToolsFooter: '診斷工具',
    expertTutoringFooter: '專業輔導',
    admissionsConsultingFooter: '入學諮詢',
    companyFooter: '公司',
    aboutUsFooter: '關於我們',
    ourTutorsFooter: '我們的導師',
    contactFooter: '聯絡',
    supportFooter: '支援',
    resourcesFooter: '資源',
    blogFooter: '部落格',
    admissionsGuidesFooter: '入學指南',
    successStoriesFooter: '成功故事',
    faqFooter: '常見問題',
    allRightsReserved: '© 2025 Common Prep. 版權所有。',
    privacyPolicy: '隱私政策',
    termsOfService: '服務條款',
    
    // Other sections
    trustedBy: '受以下學校學生信賴'
  }
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');
  
  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}