import Link from 'next/link';

export default function DiscoverButton() {
  return (
    <Link href="/mbti" className="button w-[171px] h-[44px] bg-[#5777D0] rounded-[22px] overflow-hidden flex items-center justify-center box-border">
      <span className="font-semibold text-[16px] text-white">Explore the quiz</span>
    </Link>
  );
}
