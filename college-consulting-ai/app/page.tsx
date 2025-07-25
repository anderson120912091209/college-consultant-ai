import Link from "next/link";
import Navigation from "./components/Navigation";

export default function Home() {
  return (
    <div className="luxury-background">
      {/* Navigation Component */}
      <Navigation />

      {/* Hero Section with Luxury AI Icon */}
      <section className="hero-luxury">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center relative z-10">
            <div className="animate-fade-in-luxury">
              <h1 className="headline-luxury slogan-khmer text-6xl md:text-7xl mb-12">
                We cost down elite college prep
              </h1>
              <p className="text-xl text-text-secondary max-w-4xl mx-auto mb-16 leading-relaxed font-light">
                Where artificial intelligence evaluates your potential and expert tutors guide you to success. 
                The future of college admissions is here.
              </p>
            </div>

            {/* Luxury AI Icon */}
            <div className="ai-icon-luxury animate-fade-in-delay-luxury"></div>

            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-20 animate-fade-in-delay-2-luxury">
              <button className="btn-luxury-primary text-lg">
                Start AI Evaluation
              </button>
              <Link href="/diagnostic" className="btn-luxury-secondary text-lg">
                Run Diagnostic
              </Link>
            </div>

            <div className="animate-fade-in-delay-2-luxury">
              <p className="text-sm text-text-light mb-6 font-light">Trusted by students from</p>
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
                <div className="text-text-secondary font-light text-lg">Success Rate</div>
              </div>
              <div className="animate-fade-in-luxury" style={{animationDelay: '0.1s'}}>
                <div className="stat-number-luxury">10K+</div>
                <div className="text-text-secondary font-light text-lg">Students Helped</div>
              </div>
              <div className="animate-fade-in-luxury" style={{animationDelay: '0.2s'}}>
                <div className="stat-number-luxury">500+</div>
                <div className="text-text-secondary font-light text-lg">Universities</div>
              </div>
              <div className="animate-fade-in-luxury" style={{animationDelay: '0.3s'}}>
                <div className="stat-number-luxury">4.9/5</div>
                <div className="text-text-secondary font-light text-lg">Student Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Evaluation Features */}
      <section className="py-32 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 animate-slide-up-luxury">
            <h2 className="headline-luxury text-5xl mb-8">AI-Powered Evaluation</h2>
            <p className="text-xl text-text-secondary max-w-4xl mx-auto font-light">
              Our advanced AI analyzes thousands of successful applications to give you
              precise insights into your college admission chances.
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
                Acceptance Probability
              </h3>
              <p className="text-text-secondary leading-relaxed text-center font-light">
                Get precise calculations of your admission chances at each university
                based on your unique profile and achievements.
              </p>
            </div>

            <div className="luxury-card animate-fade-in-delay-luxury" style={{animationDelay: '0.2s'}}>
              <div className="feature-icon-luxury">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="font-light text-2xl text-accent-dark mb-6 text-center">
                Smart Matching
              </h3>
              <p className="text-text-secondary leading-relaxed text-center font-light">
                AI matches you with universities where you have the highest probability
                of acceptance and connects you with specialized tutors.
              </p>
            </div>

            <div className="luxury-card animate-fade-in-delay-luxury" style={{animationDelay: '0.4s'}}>
              <div className="feature-icon-luxury">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="font-light text-2xl text-accent-dark mb-6 text-center">
                Performance Analytics
              </h3>
              <p className="text-text-secondary leading-relaxed text-center font-light">
                Track your application progress with detailed analytics and insights
                to optimize your strategy for maximum success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Diagnostic Features */}
      <section className="py-32 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 animate-slide-up-luxury">
            <h2 className="headline-luxury text-5xl mb-8">Comprehensive Diagnostic</h2>
            <p className="text-xl text-text-secondary max-w-4xl mx-auto font-light">
              Identify your strengths and weaknesses with our AI-powered diagnostic tools
              that provide actionable insights for improvement.
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
                Resume Analysis
              </h3>
              <p className="text-text-secondary leading-relaxed text-center font-light">
                AI-powered evaluation of your resume with specific recommendations
                that our expert tutors will help you implement effectively.
              </p>
            </div>

            <div className="luxury-card animate-fade-in-delay-2-luxury" style={{animationDelay: '0.2s'}}>
              <div className="feature-icon-luxury">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="font-light text-2xl text-accent-dark mb-6 text-center">
                Essay Feedback
              </h3>
              <p className="text-text-secondary leading-relaxed text-center font-light">
                Detailed analysis of your essays with actionable feedback that our
                expert tutors will guide you through improving step by step.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expert Tutors Section */}
      <section className="py-32 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 animate-slide-up-luxury">
            <h2 className="headline-luxury text-5xl mb-8">Expert Tutors Await</h2>
            <p className="text-xl text-text-secondary max-w-4xl mx-auto font-light">
              After your AI evaluation, connect with specialized tutors who know exactly
              how to address your weaknesses and maximize your chances of acceptance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="luxury-card animate-fade-in-delay-luxury">
              <h3 className="font-light text-3xl text-accent-dark mb-8 text-center">
                Personalized Guidance
              </h3>
              <p className="text-text-secondary leading-relaxed mb-10 text-center font-light">
                Our expert tutors create customized strategies based on your AI evaluation
                to maximize your chances of acceptance at your target universities.
              </p>
              <div className="text-center">
                <button className="btn-luxury-primary">Meet Your Tutor</button>
              </div>
            </div>

            <div className="luxury-card animate-fade-in-delay-luxury" style={{animationDelay: '0.2s'}}>
              <h3 className="font-light text-3xl text-accent-dark mb-8 text-center">
                Proven Results
              </h3>
              <p className="text-text-secondary leading-relaxed mb-10 text-center font-light">
                Our AI + tutor combination has helped thousands of students get into their
                dream schools. Join the success stories with our data-driven approach.
              </p>
              <div className="text-center">
                <button className="btn-luxury-secondary">View Success Stories</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-8">
        <div className="max-w-5xl mx-auto text-center">
          <div className="luxury-card animate-fade-in-delay-2-luxury">
            <h2 className="headline-luxury text-5xl mb-8">Ready to Transform Your Application?</h2>
            <p className="text-xl text-text-secondary mb-12 font-light">
              Start with our AI evaluation, get your comprehensive diagnostic report,
              and connect with expert tutors who know how to get you in.
            </p>
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
              <button className="btn-luxury-primary text-lg">
                Start Free Evaluation
              </button>
              <Link href="/learn-more" className="btn-luxury-secondary text-lg">
                Learn More
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
              <div className="font-light text-2xl text-white mb-6">COMMON PREP</div>
              <p className="text-gray-300 leading-relaxed font-light">
                AI-powered college admissions evaluation and expert tutoring to maximize
                your chances of getting into your dream university.
              </p>
            </div>
            <div>
              <h3 className="font-light text-white mb-6">Services</h3>
              <div className="space-y-3">
                <Link href="/ai-evaluation" className="block text-gray-300 hover:text-white transition-colors font-light">AI Evaluation</Link>
                <Link href="/diagnostic" className="block text-gray-300 hover:text-white transition-colors font-light">Diagnostic Tools</Link>
                <Link href="/tutoring" className="block text-gray-300 hover:text-white transition-colors font-light">Expert Tutoring</Link>
                <Link href="/consulting" className="block text-gray-300 hover:text-white transition-colors font-light">Admissions Consulting</Link>
              </div>
            </div>
            <div>
              <h3 className="font-light text-white mb-6">Company</h3>
              <div className="space-y-3">
                <Link href="/about" className="block text-gray-300 hover:text-white transition-colors font-light">About Us</Link>
                <Link href="/tutors" className="block text-gray-300 hover:text-white transition-colors font-light">Our Tutors</Link>
                <Link href="/contact" className="block text-gray-300 hover:text-white transition-colors font-light">Contact</Link>
                <Link href="/support" className="block text-gray-300 hover:text-white transition-colors font-light">Support</Link>
              </div>
            </div>
            <div>
              <h3 className="font-light text-white mb-6">Resources</h3>
              <div className="space-y-3">
                <Link href="/blog" className="block text-gray-300 hover:text-white transition-colors font-light">Blog</Link>
                <Link href="/guides" className="block text-gray-300 hover:text-white transition-colors font-light">Admissions Guides</Link>
                <Link href="/success-stories" className="block text-gray-300 hover:text-white transition-colors font-light">Success Stories</Link>
                <Link href="/faq" className="block text-gray-300 hover:text-white transition-colors font-light">FAQ</Link>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0 font-light">
              © 2025 Common Prep. All rights reserved.
            </div>
            <div className="flex space-x-8 text-sm text-gray-400">
              <Link href="/privacy" className="hover:text-white transition-colors font-light">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white transition-colors font-light">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
