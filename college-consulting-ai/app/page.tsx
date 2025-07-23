import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white grid-pattern">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-lg font-normal text-gray-900">ScholarAI</span>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/features" className="text-sm text-gray-600 hover:text-gray-900 transition-colors font-normal">
                Features
              </Link>
              <Link href="/pricing" className="text-sm text-gray-600 hover:text-gray-900 transition-colors font-normal">
                Pricing
              </Link>
              <Link href="/docs" className="btn-secondary text-sm font-normal">
                Docs
              </Link>
              <Link href="/login" className="btn-secondary text-sm font-normal">
                Log in
              </Link>
              <Link href="/contact" className="btn-primary text-sm font-normal">
                Talk to us
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        {/* Backed by Section */}
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-sm text-gray-600 mb-4 font-normal">Backed by</p>
          <div className="inline-flex items-center space-x-2">
            <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center">
              <span className="text-white font-normal text-sm">Y</span>
            </div>
            <span className="text-sm text-gray-600 font-normal">Combinator</span>
          </div>
        </div>

        {/* Hero Section */}
        <div className="text-center mb-16 animate-slide-up">
          <h1 className="text-5xl md:text-6xl font-normal text-gray-900 mb-6 leading-tight font-mono">
            Your college applications,
            <span className="block">
              <span className="underline-accent">finally</span>{" "}
              <span className="text-accent">meaningful</span>
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fade-in-delay font-normal">
            ScholarAI analyzes your profile so you don't have to. We tell you which colleges match your strengths, 
            how to improve your applications, and how to get into your dream schools.
          </p>
        </div>

        {/* CTA Section */}
        <div className="text-center animate-fade-in-delay-2">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="btn-primary text-lg px-8 py-4 font-normal">
              Start Now →
            </button>
            <Link href="/learn" className="text-gray-700 hover:text-gray-900 transition-colors flex items-center space-x-2 font-normal">
              <span className="text-lg">▷</span>
              <span className="text-lg">Learn More</span>
            </Link>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-20 text-center animate-slide-up-delay">
          <p className="text-sm text-gray-500 mb-6 font-normal">Trusted by students from</p>
          <div className="flex justify-center space-x-8 opacity-60">
            {['Harvard', 'Stanford', 'MIT', 'Yale', 'Princeton'].map((school) => (
              <span key={school} className="text-sm font-normal text-gray-600">{school}</span>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer-section">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="footer-grid">
            {/* Company Info */}
            <div>
              <div className="company-name">ScholarAI</div>
              <div className="company-description">
                Transform your college applications into actionable insights with AI-powered analysis. 
                Get personalized guidance and improve your chances of acceptance.
              </div>
            </div>

            {/* Solutions */}
            <div>
              <div className="section-title">Solutions</div>
              <Link href="/plg" className="section-link">PLG</Link>
              <Link href="/enterprise" className="section-link">Enterprise</Link>
              <Link href="/resume-evaluation" className="section-link">Resume Evaluation</Link>
              <Link href="/college-matching" className="section-link">College Matching</Link>
            </div>

            {/* Company */}
            <div>
              <div className="section-title">Company</div>
              <Link href="/about" className="section-link">About Us</Link>
              <Link href="/careers" className="section-link">Careers</Link>
              <Link href="/contact" className="section-link">Contact</Link>
              <Link href="/support" className="section-link">Support</Link>
            </div>

            {/* Resources */}
            <div>
              <div className="section-title">Resources</div>
              <Link href="/docs" className="section-link">Documentation</Link>
              <Link href="/blog" className="section-link">Blog</Link>
              <Link href="/guides" className="section-link">Guides</Link>
              <Link href="/api" className="section-link">API</Link>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="footer-bottom">
            <div className="copyright">
              © 2025 ScholarAI. All rights reserved.
            </div>
            <div className="legal-links">
              <Link href="/privacy" className="legal-link">
                Privacy Policy
              </Link>
              <Link href="/terms" className="legal-link">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
