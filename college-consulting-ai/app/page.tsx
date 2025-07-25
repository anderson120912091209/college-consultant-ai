import Link from "next/link";
import Navigation from "./components/Navigation";

export default function Home() {
  return (
    <div className="min-h-screen clean-background">
      {/* Navigation Component */}
      <Navigation />

      {/* Hero Section with Simple AI Icon */}
      <section className="hero-clean">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center relative z-10">
            <div className="animate-fade-in">
              <h1 className="headline-clean slogan-khmer text-5xl md:text-6xl mb-8">
                We cost down elite college prep 
              </h1>
              <p className="text-xl text-text-primary max-w-3xl mx-auto mb-12 leading-relaxed">
                Where artificial intelligence evaluates your potential and expert tutors guide you to success. 
                The future of college admissions is here.
              </p>
            </div>

            {/* Simple AI Icon */}
            <div className="ai-icon animate-fade-in-delay"></div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-fade-in-delay-2">
              <button className="btn-clean-primary text-lg">
                Start AI Evaluation
              </button>
              <Link href="/diagnostic" className="btn-clean-secondary text-lg">
                Run Diagnostic
              </Link>
            </div>

            <div className="animate-fade-in-delay-2">
              <p className="text-sm text-text-secondary mb-4">Trusted by students from</p>
              <div className="flex justify-center space-x-8 opacity-70">
                {['Harvard', 'Stanford', 'MIT', 'Yale', 'Princeton'].map((school) => (
                  <span key={school} className="text-sm font-medium text-accent-green">
                    {school}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="stats-clean">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div className="animate-fade-in">
                <div className="stat-number-clean">95%</div>
                <div className="text-text-primary font-medium text-lg">Success Rate</div>
              </div>
              <div className="animate-fade-in" style={{animationDelay: '0.1s'}}>
                <div className="stat-number-clean">10K+</div>
                <div className="text-text-primary font-medium text-lg">Students Helped</div>
              </div>
              <div className="animate-fade-in" style={{animationDelay: '0.2s'}}>
                <div className="stat-number-clean">500+</div>
                <div className="text-text-primary font-medium text-lg">Universities</div>
              </div>
              <div className="animate-fade-in" style={{animationDelay: '0.3s'}}>
                <div className="stat-number-clean">4.9/5</div>
                <div className="text-text-primary font-medium text-lg">Student Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Evaluation Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="headline-clean text-4xl mb-6">AI-Powered Evaluation</h2>
            <p className="text-xl text-text-primary max-w-3xl mx-auto">
              Our advanced AI analyzes thousands of successful applications to give you
              precise insights into your college admission chances.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="clean-card animate-fade-in-delay">
              <div className="feature-icon-clean">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="font-bold text-2xl text-accent-green mb-4 text-center">
                Acceptance Probability
              </h3>
              <p className="text-text-primary leading-relaxed text-center">
                Get precise calculations of your admission chances at each university
                based on your unique profile and achievements.
              </p>
            </div>

            <div className="clean-card animate-fade-in-delay" style={{animationDelay: '0.2s'}}>
              <div className="feature-icon-clean">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-2xl text-accent-green mb-4 text-center">
                Smart Matching
              </h3>
              <p className="text-text-primary leading-relaxed text-center">
                AI matches you with universities where you have the highest probability
                of acceptance and connects you with specialized tutors.
              </p>
            </div>

            <div className="clean-card animate-fade-in-delay" style={{animationDelay: '0.4s'}}>
              <div className="feature-icon-clean">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="font-bold text-2xl text-accent-green mb-4 text-center">
                Performance Analytics
              </h3>
              <p className="text-text-primary leading-relaxed text-center">
                Track your application progress with detailed analytics and insights
                to optimize your strategy for maximum success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Diagnostic Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="headline-clean text-4xl mb-6">Comprehensive Diagnostic</h2>
            <p className="text-xl text-text-primary max-w-3xl mx-auto">
              Identify your strengths and weaknesses with our AI-powered diagnostic tools
              that provide actionable insights for improvement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="clean-card animate-fade-in-delay-2">
              <div className="feature-icon-clean">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="font-bold text-2xl text-accent-green mb-4 text-center">
                Resume Analysis
              </h3>
              <p className="text-text-primary leading-relaxed text-center">
                AI-powered evaluation of your resume with specific recommendations
                that our expert tutors will help you implement effectively.
              </p>
            </div>

            <div className="clean-card animate-fade-in-delay-2" style={{animationDelay: '0.2s'}}>
              <div className="feature-icon-clean">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="font-bold text-2xl text-accent-green mb-4 text-center">
                Essay Feedback
              </h3>
              <p className="text-text-primary leading-relaxed text-center">
                Detailed analysis of your essays with actionable feedback that our
                expert tutors will guide you through improving step by step.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expert Tutors Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="headline-clean text-4xl mb-6">Expert Tutors Await</h2>
            <p className="text-xl text-text-primary max-w-3xl mx-auto">
              After your AI evaluation, connect with specialized tutors who know exactly
              how to address your weaknesses and maximize your chances of acceptance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="clean-card animate-fade-in-delay">
              <h3 className="font-bold text-3xl text-accent-green mb-6 text-center">
                Personalized Guidance
              </h3>
              <p className="text-text-primary leading-relaxed mb-8 text-center">
                Our expert tutors create customized strategies based on your AI evaluation
                to maximize your chances of acceptance at your target universities.
              </p>
              <div className="text-center">
                <button className="btn-clean-primary">Meet Your Tutor</button>
              </div>
            </div>

            <div className="clean-card animate-fade-in-delay" style={{animationDelay: '0.2s'}}>
              <h3 className="font-bold text-3xl text-accent-green mb-6 text-center">
                Proven Results
              </h3>
              <p className="text-text-primary leading-relaxed mb-8 text-center">
                Our AI + tutor combination has helped thousands of students get into their
                dream schools. Join the success stories with our data-driven approach.
              </p>
              <div className="text-center">
                <button className="btn-clean-secondary">View Success Stories</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="clean-card animate-fade-in-delay-2">
            <h2 className="headline-clean text-4xl mb-6">Ready to Transform Your Application?</h2>
            <p className="text-xl text-text-primary mb-8">
              Start with our AI evaluation, get your comprehensive diagnostic report,
              and connect with expert tutors who know how to get you in.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="btn-clean-primary text-lg">
                Start Free Evaluation
              </button>
              <Link href="/learn-more" className="btn-clean-secondary text-lg">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Clean Footer */}
      <footer className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="font-bold text-2xl text-accent-green mb-4">COMMON PREP</div>
              <p className="text-text-primary leading-relaxed">
                AI-powered college admissions evaluation and expert tutoring to maximize
                your chances of getting into your dream university.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-accent-green mb-4">Services</h3>
              <div className="space-y-2">
                <Link href="/ai-evaluation" className="block text-text-primary hover:text-accent-green transition-colors">AI Evaluation</Link>
                <Link href="/diagnostic" className="block text-text-primary hover:text-accent-green transition-colors">Diagnostic Tools</Link>
                <Link href="/tutoring" className="block text-text-primary hover:text-accent-green transition-colors">Expert Tutoring</Link>
                <Link href="/consulting" className="block text-text-primary hover:text-accent-green transition-colors">Admissions Consulting</Link>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-accent-green mb-4">Company</h3>
              <div className="space-y-2">
                <Link href="/about" className="block text-text-primary hover:text-accent-green transition-colors">About Us</Link>
                <Link href="/tutors" className="block text-text-primary hover:text-accent-green transition-colors">Our Tutors</Link>
                <Link href="/contact" className="block text-text-primary hover:text-accent-green transition-colors">Contact</Link>
                <Link href="/support" className="block text-text-primary hover:text-accent-green transition-colors">Support</Link>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-accent-green mb-4">Resources</h3>
              <div className="space-y-2">
                <Link href="/blog" className="block text-text-primary hover:text-accent-green transition-colors">Blog</Link>
                <Link href="/guides" className="block text-text-primary hover:text-accent-green transition-colors">Admissions Guides</Link>
                <Link href="/success-stories" className="block text-text-primary hover:text-accent-green transition-colors">Success Stories</Link>
                <Link href="/faq" className="block text-text-primary hover:text-accent-green transition-colors">FAQ</Link>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-text-primary text-sm mb-4 md:mb-0">
              © 2025 Common Prep. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-text-primary">
              <Link href="/privacy" className="hover:text-accent-green transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-accent-green transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
