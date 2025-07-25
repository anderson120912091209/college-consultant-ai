import Link from "next/link";
import Image from "next/image";

export default function Navigation() {
  return (
    <nav className="fixed top-3 left-1/2 transform -translate-x-1/2 z-50 w-10/12 max-w-5xl">
      <div className="bg-white/60 backdrop-blur-md rounded-full px-6 py-3 shadow-lg border border-white/20">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link
              href="/"
              className="flex items-center"
            >
              <Image 
                src="/CommonPrep Text Logo1.svg" 
                alt="CommonPrep" 
                width={160} 
                height={50} 
                className="h-8 w-auto"
              />
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/services" className="nav-link-luxury text-xs">
              Services
            </Link>
            <Link href="/ai-evaluation" className="nav-link-luxury text-xs">
              AI Evaluation
            </Link>
            <Link href="/diagnostic" className="nav-link-luxury text-xs">
              Diagnostic
            </Link>
            <Link href="/tutors" className="nav-link-luxury text-xs">
              Tutors
            </Link>
            <Link href="/contact" className="nav-link-luxury text-xs">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 