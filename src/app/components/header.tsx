"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

interface HeaderProps {
  showUserProfile?: boolean;
  setShowUserProfile?: (show: boolean) => void;
}

const links = [
  { href: '/', label: 'Home' },
  { href: '/#product', label: 'Product' },
  { href: '/mbti', label: 'Quiz' },
  { href: '/#about', label: 'About' },
];

export default function Header(_props: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="flex justify-center fixed top-0 bg-white border-b border-[#E8EBF6] z-10 w-full border-t-0">
      <div className="flex items-center justify-between px-[24px] md:px-[100px] w-full max-w-[1440px] h-[56px] md:h-[100px]">
        <button className="block lg:hidden w-[35px] h-[24px] border-none relative"
          onClick={() => setMenuOpen(true)} aria-label="Open navigation" aria-expanded={menuOpen}>
          <img src="/fursphere-mbti-offical/toggle.png" alt="" className="w-[20px] h-[20px] sm:w-[24px] sm:h-[24px]" />
        </button>
        <Link href="/" className="relative w-[131px] lg:w-[210px] h-[40px] lg:h-[64px]" aria-label="FurSphere home">
          <Image src="/fursphere-mbti-offical/logo.svg" alt="FurSphere Logo" fill />
        </Link>
        <div className="flex items-center">
          <nav aria-label="Main navigation" className="hidden lg:flex flex-row justify-between items-center w-[382.67px] mr-[54px]">
            {links.map(({ href, label }) => (
              <Link key={label} href={href} className={`text-[16px] text-[#1A1D1F] hover:text-[#5676CF] transition-colors ${pathname === href ? 'text-[#5676CF]' : ''}`}>
                {label}
              </Link>
            ))}
          </nav>
          <Link href="/mbti" className="flex items-center justify-center w-[90px] md:w-[123px] h-[36px] md:h-[44px] bg-gradient-to-r from-[#5676CF] to-[#AFBFE9] text-white text-[13px] md:text-[16px] font-bold rounded-[22px] hover:brightness-90 transition-all">
            Try demo
          </Link>
        </div>
      </div>
      {menuOpen && <button aria-label="Close navigation" className="fixed inset-0 bg-black/20 z-[90] lg:hidden" onClick={() => setMenuOpen(false)} />}
      <nav aria-label="Mobile navigation" aria-hidden={!menuOpen}
        className={`fixed top-0 left-0 w-[200px] h-screen bg-[#5676CF] shadow-md z-[100] flex flex-col items-start pt-[24px] pl-[20px] transition-transform duration-300 ease-in-out lg:hidden ${menuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <button className="mb-[40px]" tabIndex={menuOpen ? 0 : -1} onClick={() => setMenuOpen(false)} aria-label="Close navigation">
          <img src="/fursphere-mbti-offical/close.png" alt="" className="w-[24px] h-[24px]" />
        </button>
        {links.map(({ href, label }) => (
          <Link key={label} href={href} tabIndex={menuOpen ? 0 : -1} className="text-[16px] py-[8px] text-white hover:text-opacity-75" onClick={() => setMenuOpen(false)}>{label}</Link>
        ))}
      </nav>
    </header>
  );
}
