import Link from 'next/link';

interface SubscribeButtonProps {
  darkMode?: boolean;
}

export default function SubscribeButton({ darkMode = false }: SubscribeButtonProps) {
  return (
    <Link href="/mbti" className={`button h-[44px] ${darkMode ? 'bg-[#27355D]' : 'bg-[#5777D0]'} rounded-[22px] overflow-hidden flex flex-row items-center justify-center px-[32px] py-[16px] box-border`}>
      <span className="font-semibold text-[16px] text-white">Try the demo</span>
    </Link>
  );
}
