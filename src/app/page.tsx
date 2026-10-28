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
        <div className="bg-[#E8EBF6] px-6 py-3 text-center text-sm text-[#27355D]">
          <strong>Interactive showcase.</strong> Explore the questionnaire. Accounts and AI reports are unavailable in this demo.
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
