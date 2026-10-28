import React, { useEffect, useRef, useState } from 'react';
import SocialButton from '../common/SocialButton';
import SubscribeButton from '../common/SubscribeButton';

// Section1 组件
const Section1 = () => {
    const video1Ref = useRef<HTMLVideoElement | null>(null);

    const textSequence = ["HEALTH", "FOOD", "DAILY LIVES"];
    const [displayText, setDisplayText] = useState(textSequence[0]);

    useEffect(() => {
      const videoInterval = setInterval(() => {
        const video = video1Ref.current;
        if (video) {
          void video.play().catch(() => {});
          setTimeout(() => {
            video.pause();
          }, video.duration * 1000);
        }
      }, 20000);

      let textIndex = 0;
      const textInterval = setInterval(() => {
        setTimeout(() => {
          textIndex = (textIndex + 1) % textSequence.length;
          setDisplayText(textSequence[textIndex]);
      }, 2000);
      }, 3000);

      return () => {
        clearInterval(videoInterval);
        clearInterval(textInterval);
      };
    }, []);

    return (
      <section className="
        flex flex-col md:flex-row
        mt-[0px]
        w-screen max-w-[768px] md:max-w-[1440px]
        mx-auto
        items-center justify-center">
        <VideoSection videoRef={video1Ref} />
        <ContentSection displayText={displayText} />
      </section>
    );
  };

const VideoSection = ({ videoRef }: { videoRef: React.RefObject<HTMLVideoElement> }) => (

    <div className="relative

    flex flex-col
    max-w-[768px] md:max-w-[700px]
    items-center justify-center  ">
      <div className="
      flex flex-col items-center justify-center
      h-full w-full  ">
        <video
          className="
          w-full
          h-full
           "
          ref={videoRef}
          autoPlay
          playsInline
          loop={false}
          muted
          select-none="true"
          style={{
            clipPath: "inset(1% 1% 1% 1%)",
          }}
        >
          <source src="/fursphere-mbti-offical/video/landing.mp4" type="video/mp4" />
        </video>
        {/* 添加阴影效果层 */}
        {/* <div className="absolute bottom-0 left-0 w-full">
          <img className="w-full" src="Change Shadow Type.png" alt="" />
        </div> */}
      </div>
    </div>

);

const ContentSection = ({ displayText }: { displayText: string }) => (
  <div className="

  mt-[40px] md:mt-[0px]
  flex flex-col
  items-center md:items-start


  gap-y-[20px] md:gap-y-[32px]">
    <TitleSection displayText={displayText} />
    <p className="max-w-[420px] px-4 md:px-0 text-center md:text-left text-[#717680] text-[15px]">
      A preview of the FurSphere pet care concept. Start with the interactive personality questionnaire.
    </p>
    <SocialSection />
  </div>
);

const TitleSection = ({ displayText }: { displayText: string }) => (
  // [@media(max-width:560px)]:w-1/2

    <h1 className="

    max-w-[504px]
    max-[535px]:w-2/3 max-[464px]:w-1/2
    text-[32px] md:text-[48px]
    text-center md:text-left
    font-UbuntuLight
    text-[#505D90]
    leading-[38.4px] md:leading-[57.6px]
    tracking-[-1.2px] md:tracking-[-1.92px]">
      A pet concierge that
      manages your pets' <br />
      <span className="
      font-balooExtraBold
      leading-[57.6px] md:leading-[76.8px]
      text-[48px] md:text-[64px]
      bg-gradient-to-t from-[#AFBFE9] via-[#5777D0] to-[#AFBFE9] bg-clip-text text-transparent">
        {displayText}
      </span>
    </h1>

);

const SocialSection = () => (
  <div className=" flex flex-col min-[450px]:flex-row items-center justify-center md:justify-start gap-[12px] w-full text-center font-Inter">
    <SubscribeButton />
    <div className="or-join relative text-[13px] leading-[24px] tracking-[-0.01em] text-[#A4AAC2] text-left">
      follow
    </div>
    <div className="flex flex-row items-center justify-center gap-[12px]">
    <SocialButton
      href="https://discord.gg/fursphere"
      icon="/fursphere-mbti-offical/discord-icon.svg"
      alt="Discord"
    />
    <SocialButton
      href="https://www.instagram.com/fur.sphere?igsh=MWowbXNjdHcxcmU5Mw=="
      icon="/fursphere-mbti-offical/instagram.svg"
      alt="Instagram"
      isWhiteBg={true}
      variant="light"
    />
    <SocialButton
      href="https://www.xiaohongshu.com/user/profile/67ac0cff000000000e01d218"
      icon="/fursphere-mbti-offical/xiaohongshu.svg"
      alt="Xiaohongshu"
      isWhiteBg={true}
      variant="light"
    />
    </div>
  </div>
);

export default Section1;
