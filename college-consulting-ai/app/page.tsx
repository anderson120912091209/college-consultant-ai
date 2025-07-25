'use client';

import Link from "next/link";
import Navigation from "./components/Navigation";
import { LanguageProvider, useLanguage } from "./contexts/LanguageContext";

function HomeContent() {
  const { t } = useLanguage();
  
  return (
    <div className="luxury-background">
      {/* Navigation Component */}
      <Navigation />

      {/* Hero Section with Luxury AI Icon */}
      <section className="hero-luxury">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center relative z-10">
            <div className="animate-fade-in-luxury">
              <h1 className="headline-luxury slogan-khmer letter-spacing-0 text-6xl md:text-7xl mb-12">
                {t('heroTitle')}
              </h1>
              <p className="text-xl text-text-secondary max-w-4xl mx-auto mb-16 leading-relaxed font-light">
                {t('heroDescription')}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-20 animate-fade-in-delay-2-luxury">
              <button className="btn-luxury-primary text-lg">
                {t('startAiEvaluation')}
              </button>
              <Link href="/diagnostic" className="btn-luxury-secondary text-lg">
                {t('runDiagnostic')}
              </Link>
            </div>

            <div className="animate-fade-in-delay-2-luxury">
              <p className="text-sm text-text-light mb-6 font-light">{t('trustedBy')}</p>
              <div className="flex justify-center space-x-12 opacity-60">
                {['Harvard', 'Stanford', 'MIT', 'Yale', 'Princeton'].map((school) => (
                  <span key={school} className="text-sm font-light text-text-secondary">
                    {school}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="stats-luxury">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center">
              <div className="animate-fade-in-luxury">
                <div className="stat-number-luxury">95%</div>
                <div className="text-text-secondary font-light text-lg">{t('successRate')}</div>
              </div>
              <div className="animate-fade-in-luxury" style={{animationDelay: '0.1s'}}>
                <div className="stat-number-luxury">10K+</div>
                <div className="text-text-secondary font-light text-lg">{t('studentsHelped')}</div>
              </div>
              <div className="animate-fade-in-luxury" style={{animationDelay: '0.2s'}}>
                <div className="stat-number-luxury">500+</div>
                <div className="text-text-secondary font-light text-lg">{t('universities')}</div>
              </div>
              <div className="animate-fade-in-luxury" style={{animationDelay: '0.3s'}}>
                <div className="stat-number-luxury">4.9/5</div>
                <div className="text-text-secondary font-light text-lg">{t('studentRating')}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Evaluation Features */}
      <section className="py-32 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 animate-slide-up-luxury">
            <h2 className="headline-luxury text-5xl mb-8">{t('aiPoweredEvaluation')}</h2>
            <p className="text-xl text-text-secondary max-w-4xl mx-auto font-light">
              {t('aiEvaluationDescription')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="luxury-card animate-fade-in-delay-luxury">
              <div className="feature-icon-luxury">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="font-light text-2xl text-accent-dark mb-6 text-center">
                {t('acceptanceProbability')}
              </h3>
              <p className="text-text-secondary leading-relaxed text-center font-light">
                {t('acceptanceProbabilityDesc')}
              </p>
            </div>

            <div className="luxury-card animate-fade-in-delay-luxury" style={{animationDelay: '0.2s'}}>
              <div className="feature-icon-luxury">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="font-light text-2xl text-accent-dark mb-6 text-center">
                {t('smartMatching')}
              </h3>
              <p className="text-text-secondary leading-relaxed text-center font-light">
                {t('smartMatchingDesc')}
              </p>
            </div>

            <div className="luxury-card animate-fade-in-delay-luxury" style={{animationDelay: '0.4s'}}>
              <div className="feature-icon-luxury">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="font-light text-2xl text-accent-dark mb-6 text-center">
                {t('performanceAnalytics')}
              </h3>
              <p className="text-text-secondary leading-relaxed text-center font-light">
                {t('performanceAnalyticsDesc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Diagnostic Features */}
      <section className="py-32 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 animate-slide-up-luxury">
            <h2 className="headline-luxury text-5xl mb-8">{t('comprehensiveDiagnostic')}</h2>
            <p className="text-xl text-text-secondary max-w-4xl mx-auto font-light">
              {t('diagnosticDescription')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="luxury-card animate-fade-in-delay-2-luxury">
              <div className="feature-icon-luxury">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="font-light text-2xl text-accent-dark mb-6 text-center">
                {t('resumeAnalysis')}
              </h3>
              <p className="text-text-secondary leading-relaxed text-center font-light">
                {t('resumeAnalysisDesc')}
              </p>
            </div>

            <div className="luxury-card animate-fade-in-delay-2-luxury" style={{animationDelay: '0.2s'}}>
              <div className="feature-icon-luxury">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="font-light text-2xl text-accent-dark mb-6 text-center">
                {t('essayFeedback')}
              </h3>
              <p className="text-text-secondary leading-relaxed text-center font-light">
                {t('essayFeedbackDesc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expert Tutors Section */}
      <section className="py-32 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 animate-slide-up-luxury">
            <h2 className="headline-luxury text-5xl mb-8">{t('expertTutorsAwait')}</h2>
            <p className="text-xl text-text-secondary max-w-4xl mx-auto font-light">
              {t('tutorsDescription')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="luxury-card animate-fade-in-delay-luxury">
              <h3 className="font-light text-3xl text-accent-dark mb-8 text-center">
                {t('personalizedGuidance')}
              </h3>
              <p className="text-text-secondary leading-relaxed mb-10 text-center font-light">
                {t('personalizedGuidanceDesc')}
              </p>
              <div className="text-center">
                <button className="btn-luxury-primary">{t('meetYourTutor')}</button>
              </div>
            </div>

            <div className="luxury-card animate-fade-in-delay-luxury" style={{animationDelay: '0.2s'}}>
              <h3 className="font-light text-3xl text-accent-dark mb-8 text-center">
                {t('provenResults')}
              </h3>
              <p className="text-text-secondary leading-relaxed mb-10 text-center font-light">
                {t('provenResultsDesc')}
              </p>
              <div className="text-center">
                <button className="btn-luxury-secondary">{t('viewSuccessStories')}</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-8">
        <div className="max-w-5xl mx-auto text-center">
          <div className="luxury-card animate-fade-in-delay-2-luxury">
            <h2 className="headline-luxury text-5xl mb-8">{t('readyToTransform')}</h2>
            <p className="text-xl text-text-secondary mb-12 font-light">
              {t('ctaDescription')}
            </p>
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
              <button className="btn-luxury-primary text-lg">
                {t('startFreeEvaluation')}
              </button>
              <Link href="/learn-more" className="btn-luxury-secondary text-lg">
                {t('learnMore')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Luxury Footer */}
      <footer className="bg-accent-dark py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="font-light text-2xl text-white mb-6">{t('companyName')}</div>
              <p className="text-gray-300 leading-relaxed font-light">
                {t('footerDescription')}
              </p>
            </div>
            <div>
              <h3 className="font-light text-white mb-6">{t('servicesFooter')}</h3>
              <div className="space-y-3">
                <Link href="/ai-evaluation" className="block text-gray-300 hover:text-white transition-colors font-light">{t('aiEvaluationFooter')}</Link>
                <Link href="/diagnostic" className="block text-gray-300 hover:text-white transition-colors font-light">{t('diagnosticToolsFooter')}</Link>
                <Link href="/tutoring" className="block text-gray-300 hover:text-white transition-colors font-light">{t('expertTutoringFooter')}</Link>
                <Link href="/consulting" className="block text-gray-300 hover:text-white transition-colors font-light">{t('admissionsConsultingFooter')}</Link>
              </div>
            </div>
            <div>
              <h3 className="font-light text-white mb-6">{t('companyFooter')}</h3>
              <div className="space-y-3">
                <Link href="/about" className="block text-gray-300 hover:text-white transition-colors font-light">{t('aboutUsFooter')}</Link>
                <Link href="/tutors" className="block text-gray-300 hover:text-white transition-colors font-light">{t('ourTutorsFooter')}</Link>
                <Link href="/contact" className="block text-gray-300 hover:text-white transition-colors font-light">{t('contactFooter')}</Link>
                <Link href="/support" className="block text-gray-300 hover:text-white transition-colors font-light">{t('supportFooter')}</Link>
              </div>
            </div>
            <div>
              <h3 className="font-light text-white mb-6">{t('resourcesFooter')}</h3>
              <div className="space-y-3">
                <Link href="/blog" className="block text-gray-300 hover:text-white transition-colors font-light">{t('blogFooter')}</Link>
                <Link href="/guides" className="block text-gray-300 hover:text-white transition-colors font-light">{t('admissionsGuidesFooter')}</Link>
                <Link href="/success-stories" className="block text-gray-300 hover:text-white transition-colors font-light">{t('successStoriesFooter')}</Link>
                <Link href="/faq" className="block text-gray-300 hover:text-white transition-colors font-light">{t('faqFooter')}</Link>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0 font-light">
              {t('allRightsReserved')}
            </div>
            <div className="flex space-x-8 text-sm text-gray-400">
              <Link href="/privacy" className="hover:text-white transition-colors font-light">{t('privacyPolicy')}</Link>
              <Link href="/terms" className="hover:text-white transition-colors font-light">{t('termsOfService')}</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function Home() {
  return (
    <LanguageProvider>
      <HomeContent />
    </LanguageProvider>
  );
}
