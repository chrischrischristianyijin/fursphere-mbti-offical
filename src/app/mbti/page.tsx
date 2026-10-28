"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Header from '../components/header';
import ProgressBar from '../components/mbti/ProgressBar';
import StartScreen from '../components/mbti/basic_info/startscreen';
import Part1 from '../components/mbti/basic_info/part1';
import SpecieBreed from '../components/mbti/basic_info/specie_breed';
import Gender from '../components/mbti/basic_info/gender';
import Age from '../components/mbti/basic_info/age';
import NamePhoto from '../components/mbti/basic_info/name_photo';
import Part2 from '../components/mbti/behavioral_quiz/part2';
import { SurveyData } from '../types/survey';
import Question1 from '../components/mbti/behavioral_quiz/question1';
import Question2 from '../components/mbti/behavioral_quiz/question2';
import Question3 from '../components/mbti/behavioral_quiz/question3';
import Question4 from '../components/mbti/behavioral_quiz/question4';
import Question5 from '../components/mbti/behavioral_quiz/question5';
import Question6 from '../components/mbti/behavioral_quiz/question6';
import Question7 from '../components/mbti/behavioral_quiz/question7';
import Question8 from '../components/mbti/behavioral_quiz/question8';
import Question9 from '../components/mbti/behavioral_quiz/question9';
import Question10 from '../components/mbti/behavioral_quiz/question10';
import Question11 from '../components/mbti/behavioral_quiz/question11';
import Question12 from '../components/mbti/behavioral_quiz/question12';

const questions: React.ComponentType<any>[] = [Question1, Question2, Question3, Question4, Question5, Question6, Question7, Question8, Question9, Question10, Question11, Question12];
const basicPages = [StartScreen, SpecieBreed, Gender, Age, NamePhoto];

export default function PetMBTIFlow() {
  const [step, setStep] = useState(0);
  const [part1, setPart1] = useState(false);
  const [part2, setPart2] = useState(false);
  const [surveyData, setSurveyData] = useState<SurveyData>({
    user_info: {
      name: '',
      email: '',
      ip: '',
      mbti: '',
      test_times: 0,
      test_date: '',
      signup: false,
      email_signup_time: ''
    },
    pet_info: {
      PetSpecies: '',
      PetBreed: '',
      PetBreedCustom: '',
      PetGender: '',
      PetAge: '',
      PetName: '',
      PetPhoto: '',
      PetPublicUrl: '',
    },
    personality_and_behavior: {
      Energy_Socialization: {
        seek_attention: '',
        friend_visit_behaviors: '',
        react_new_friend: '',
      },
      Routin_Curiosity: {
        interact_with_toys: '',
        fur_care_7days: '',
        react_new_environment: '',
      },
      Decision_Making: {
        stranger_enter_territory: '',
        react_when_sad: '',
        respond_to_scold: '',
      },
      Structure_Spontaneity: {
        prefer_routine: '',
        toy_out_of_reach: '',
        follow_commands: '',
      },
    }
  });
  const updateAnswer = (category: keyof SurveyData, subCategory: any, field: string, value: string | File) => {
    setSurveyData(previous => {
      const section = previous[category] as Record<string, any>;
      return { ...previous, [category]: subCategory
        ? { ...section, [subCategory]: { ...section[subCategory], [field]: value } }
        : { ...section, [field]: value } };
    });
  };
  const handleNext = () => { setStep(value => Math.min(value + 1, 17)); window.scrollTo(0, 0); };
  const handleBack = () => { setStep(value => Math.max(value - 1, 0)); window.scrollTo(0, 0); };
  const shared = { step, setStep, surveyData, updateAnswer, handleNext, handleBack, handleSkip: handleNext, part1, setPart1, setPart2 };
  const BasicPage = basicPages[step];
  const Question = questions[step - 5];

  return (
    <div className={`min-h-screen ${part1 || part2 ? 'bg-[#F5F5F5]' : 'bg-white'}`}>
      <Header />
      <main className="pt-[56px] md:pt-0">
        {!part1 && !part2 && step > 0 && <ProgressBar step={step} />}
        {part1 ? <Part1 {...shared} /> : part2 ? <Part2 {...shared} /> : step <= 4 ? (
          <BasicPage {...shared} />
        ) : step <= 16 ? (
          <Question key={step} {...shared} />
        ) : (
          <section className="mx-auto max-w-[720px] px-6 py-16 text-center text-[#27355D]">
            <span className="rounded-full bg-[#EEF1FA] px-4 py-2 text-sm text-[#5777D0]">FurSphere showcase</span>
            <h1 className="mt-8 text-3xl font-semibold md:text-5xl">You’ve explored the questionnaire!</h1>
            <p className="mt-6 text-lg leading-relaxed">This preview lets you experience FurSphere’s original pet personality questionnaire. Your answers and photo stay in this browser tab and are cleared when you refresh.</p>
            <p className="mt-4 leading-relaxed text-[#667085]">Personalized AI reports, accounts, and email delivery are unavailable in this showcase. No personality result has been generated.</p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <button onClick={handleBack} className="rounded-full border border-[#5777D0] px-6 py-3">Review answers</button>
              <Link href="/" className="rounded-full bg-[#5777D0] px-6 py-3 text-white">Back to FurSphere</Link>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
