'use client';

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "../contexts/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navigation() {
  const { t } = useLanguage();
  return (
    <nav className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50 w-11/12 max-w-6xl">
      <div className="relative flex items-center">
        {/* Logo - Left */}
        <div className="flex items-center">
          <Link
            href="/"
            className="flex items-center group"
          >
            <Image 
              src="/Logo2.svg" 
              alt="CommonPrep" 
              width={160} 
              height={50} 
              className="h-8 w-auto transition-all duration-500 ease-out group-hover:scale-105 group-hover:drop-shadow-[0_4px_12px_rgba(186,241,165,0.3)]"
            />
          </Link>
        </div>

        {/* Center Navigation Links - Absolutely centered */}
        <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex items-center space-x-2">
          <Link 
            href="/services" 
            className="nav-link-premium text-sm"
          >
            {t('services')}
          </Link>
          <Link 
            href="/ai-evaluation" 
            className="nav-link-premium text-sm"
          >
            {t('aiEvaluation')}
          </Link>
          <Link 
            href="/diagnostic" 
            className="nav-link-premium text-sm"
          >
            {t('diagnostic')}
          </Link>
          <Link 
            href="/tutors" 
            className="nav-link-premium text-sm"
          >
            {t('tutors')}
          </Link>
        </div>

        {/* Get Started Button & Language Switcher - Right */}
        <div className="flex items-center ml-auto space-x-4">
          <Link 
            href="/contact" 
            className="btn-premium-cta text-sm"
          >
            {t('getStarted')}
          </Link>
          <LanguageSwitcher />
        </div>
      </div>
    </nav>
  );
} 