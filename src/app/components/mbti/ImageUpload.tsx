import React, { useEffect, useRef, useState } from 'react';
import { SurveyData } from '@/app/types/survey';

interface ImageUploadProps {
  updateAnswer: (category: keyof SurveyData, subCategory: any, field: string, value: string | File) => void;
  surveyData: SurveyData;
}

export default function ImageUpload({ updateAnswer, surveyData }: ImageUploadProps) {
  const [error, setError] = useState('');
  const reader = useRef<FileReader | null>(null);
  useEffect(() => () => { reader.current?.abort(); }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    if (!['image/jpeg', 'image/png', 'image/webp', 'image/gif'].includes(file.type) || file.size > 10 * 1024 * 1024) {
      setError('Choose a JPG, PNG, WebP, or GIF under 10 MB.');
      return;
    }
    setError('');
    reader.current?.abort();
    const nextReader = new FileReader();
    reader.current = nextReader;
    nextReader.onload = () => updateAnswer('pet_info', null, 'PetPhoto', String(nextReader.result));
    nextReader.onerror = () => setError('This photo could not be opened. Please try another.');
    nextReader.readAsDataURL(file);
  };

  return (
    <div>
      <label className="relative flex h-[200px] w-[200px] cursor-pointer items-center justify-center overflow-hidden rounded-[20px] border border-[#717680] bg-white text-[#27355D] md:h-[250px] md:w-[250px]">
        {surveyData.pet_info.PetPhoto ? <img src={surveyData.pet_info.PetPhoto} alt="Your pet photo preview" className="h-full w-full object-cover" /> : <span className="text-center"><span className="text-3xl">+</span><br />Preview a photo</span>}
        <input type="file" aria-label="Preview a pet photo locally" accept="image/jpeg,image/png,image/webp,image/gif" onChange={handleChange} className="absolute inset-0 h-full w-full cursor-pointer opacity-0" />
      </label>
      {surveyData.pet_info.PetPhoto && <button type="button" className="mt-2 text-sm text-[#5777D0] underline" onClick={() => updateAnswer('pet_info', null, 'PetPhoto', '')}>Remove photo</button>}
      <p className="mt-2 text-sm text-[#667085]">Local preview only. Nothing is uploaded.</p>
      {error && <p role="alert" className="mt-2 text-sm text-red-700">{error}</p>}
    </div>
  );
}
