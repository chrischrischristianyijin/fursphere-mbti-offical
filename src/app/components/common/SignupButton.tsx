interface SignupButtonProps {
  className?: string;
}

export default function SignupButton({ className = '' }: SignupButtonProps) {
  return (
    <span className={`${className} bg-[#E8EBF6] rounded-[22px] flex items-center justify-center box-border`}>
      <span className="font-semibold text-[#505D90]">Concept preview</span>
    </span>
  );
}
