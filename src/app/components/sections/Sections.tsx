import React, { useRef } from 'react';
import Image from 'next/image';
import DiscoverButton from '../common/DiscoverButton';
import SignupButton from '../common/SignupButton';


// Section1.5 组件
const Section1_2: React.FC = () => {


  return (
    <div id="product" className='scroll-mt-[110px] mt-[40px] md:mt-[80px] bg-[#F8F7F8]'>
    <section className=" max-w-[1240px] h-[384px] mx-auto  ">

      <div className="
      flex flex-col
      mt-[40px] md:mt-[60px]
      items-center
      w-full
      h-[325px] md:h-[162px]
      gap-y-[20px]">
        <h1 className="
        w-full
        text-[32px] md:text-[48px]
        text-center
        font-UbuntuLight
        text-[#505D90]
        leading-[38.4px] md:leading-[57.6px]
        tracking-[-1.2px] md:tracking-[-1.92px]">
          Fluffy mastermind or daydreaming artist?
         </h1>
         <h2 className="
        w-full
        text-[16px] md:text-[16px]
        text-center
        font-[Inter]
        text-[#505D90]
        leading-normal">
          Explore the original pet personality questionnaire.
         </h2>
         <div className="
         w-full
         flex flex-row items-center justify-center
         ">
         <DiscoverButton />
         </div>

         <div className=" max-w-[768px] max-h-[143px]">
         <Image
          src="/fursphere-mbti-offical/page1_2.svg"
          alt="Fursphere Logo"
          width={768}
          height={143}
          className="w-full h-full object-cover relative"
        />
         </div>




      </div>




    </section>
    </div>
  );
};

// Section2 组件
const Section2: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  return (
    <section className="
    mt-[40px] md:mt-[80px]
    max-w-[1240px]
    mx-auto
    overflow-hidden ">
      <div className="  w-full  flex flex-col md:flex-row items-center justify-between">
        {/* Left Content */}
        <div className=" mt-[40px] md:mt-[0px]  md:max-w-[620px] flex flex-col items-center md:items-start gap-y-[20px] md:gap-y-[32px]">
          <h1 className="text-[24px] md:text-[32px] text-[#505D90] text-center md:text-left font-Ubuntu
          tracking-[-0.96px] md:tracking-[-1.28px]
          leading-[28.8px] md:leading-[38.4px]">
            Compare prices across
            <span className="text-[#5777D0]"> 10+ </span>
            stores best <br />
            pet supplies.
          </h1>

          <div className="
          w-full
          h-full
          text-[16px]
          flex flex-row items-center justify-center
           ">
          <SignupButton
            className="
            w-[164px]
            h-[44px]"
          />
          </div>

        </div>

        {/* Right Content - Video */}
        <div className=" w-full md:w-1/2">
          <div className=" w-full h-full">
          <video
            ref={videoRef}
            className=" mt-[15px] md:mt-[0] w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            select-none="true"

          >
            <source src="/fursphere-mbti-offical/video/page1.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};


// Section3 组件
const Section3: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  return (
    <section className="
    mt-[40px] md:mt-[80px]
    max-w-[1240px]
    mx-auto
    overflow-hidden ">
      <div className=" w-full  flex flex-col md:flex-row items-center justify-between">
        {/* Left Content */}
        <div className="mt-[40px] md:mt-[0px] md:max-w-[620px]  flex flex-col items-center md:items-start gap-y-[20px] md:gap-y-[32px]">
          <h1 className="text-[24px] md:text-[32px] text-[#505D90] text-center md:text-left font-Ubuntu
          tracking-[-0.96px] md:tracking-[-1.28px]
          leading-[28.8px] md:leading-[38.4px]">
            <span>Help you know </span>
            <b className="text-[#5777D0]">everything </b>
            <span> about your <br/>
            pet, even when not at home.</span>
          </h1>

          <div className="
          w-full
          h-full
          text-[16px]
          flex flex-row items-center justify-center
           ">
          <SignupButton
            className="
            w-[164px]
            h-[44px]"
          />
          </div>

        </div>

        {/* Right Content - Video */}
        <div className="  w-full md:w-1/2">
          <div className=" w-full h-full">
          <video
            ref={videoRef}
            className=" mt-[15px] md:mt-[0] w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            select-none="true"
          >
            <source src="/fursphere-mbti-offical/video/page2.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

// Section4 组件
const Section4: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  return (
    <section className="
    mt-[40px] md:mt-[80px]
    max-w-[1240px]
     mx-auto
    overflow-hidden ">
      <div className=" w-full  flex flex-col md:flex-row items-center justify-between">
        {/* Left Content */}
        <div className="mt-[40px] md:mt-[0px] md:max-w-[620px] flex flex-col items-center md:items-start gap-y-[20px] md:gap-y-[32px]">
          <h1 className="text-[24px] md:text-[32px] text-[#505D90] text-center md:text-left font-Ubuntu
          tracking-[-0.96px] md:tracking-[-1.28px]
          leading-[28.8px] md:leading-[38.4px]">
            <span>Convert medical records into </span>
            <b className="text-[#5777D0]">pet <br/> parent-friendly </b>
            <span> terms for easier <br/>
            understanding.</span>
          </h1>

          <div className="
          w-full
          h-full
          text-[16px]
          flex flex-row items-center justify-center
           ">
          <SignupButton
            className="
            w-[164px]
            h-[44px]"
          />
          </div>

        </div>

        {/* Right Content - Video */}
        <div className=" w-full md:w-1/2">
          <div className=" w-full h-full">
          <video
            ref={videoRef}
            className=" mt-[15px] md:mt-[0] w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            select-none="true"
          >
            <source src="/fursphere-mbti-offical/video/page3.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};



export {
    Section1_2,
    Section2,
    Section3,
    Section4
};
