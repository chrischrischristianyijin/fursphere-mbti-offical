"use client";

import Header from './components/header';
import Footer from './components/footer';
import { Section1_2, Section2, Section3, Section4 } from './components/sections/Sections';
import Section1 from './components/sections/Section1';
import Section5 from './components/sections/Section5';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <motion.div className="w-full flex bg-white flex-col"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}>
      <Header />
      <main className="mt-[56px] md:mt-[100px] flex flex-col w-full">
        <div className="overflow-x-auto bg-[#E8EBF6] px-6 py-3 text-center text-sm text-[#27355D]">
          <p className="flex w-max min-w-full items-center justify-center gap-x-3 whitespace-nowrap">
            <strong>Interactive showcase.</strong>
            <span>Original source code:</span>
            <a href="https://github.com/JasonKeyiL/fursphere-mbti-offical/tree/main" target="_blank" rel="noopener noreferrer" className="font-medium underline underline-offset-2 hover:text-[#5777D0]">Frontend (main)</a>
            <span aria-hidden="true">·</span>
            <a href="https://github.com/chrischrischristianyijin/fursphere-mbti-python-server-offical/tree/main" target="_blank" rel="noopener noreferrer" className="font-medium underline underline-offset-2 hover:text-[#5777D0]">Backend (main)</a>
          </p>
        </div>
        <Section1 />
        <Section1_2 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
      </main>
      <Footer />
    </motion.div>
  );
}
