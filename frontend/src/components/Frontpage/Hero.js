const Hero = () => {
  return (
    <div className="mr-[-81px] w-[1431px] bg-black overflow-hidden flex flex-row items-start justify-start pt-[184.9px] px-[68px] pb-[185.1px] box-border relative max-w-[107%] shrink-0 text-left text-33xl-8 text-white font-domine mq800:pt-[120px] mq800:pb-[120px] mq800:box-border mq1150:pl-[34px] mq1150:pr-[34px] mq1150:box-border">
      <img
        className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
        alt="HERO"
        src="/hero.png"
      />
      <div className="w-[694px] rounded-2xl bg-gray-400 flex flex-col items-start justify-start pt-[33.9px] px-[34px] pb-[70.6px] box-border gap-[34.1px] max-w-full z-[1] mq800:gap-[17px]">
        <div className="w-[574.2px] relative leading-[60px] flex items-center max-w-full mq800:text-23xl mq800:leading-[47px] mq450:text-13xl mq450:leading-[35px]">
          Winter School 2024
        </div>
        <div className="w-[598.6px] flex flex-col items-start justify-start gap-[44px] max-w-full text-mid-6 text-gainsboro-100 font-open-sans mq800:gap-[22px]">
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[5px] box-border max-w-full shrink-0">
            <div className="flex-1 relative leading-[33px] inline-block max-w-full">
              Frosting the Future of Cybersecurity
            </div>
          </div>
          <div className="w-[463.7px] flex flex-row flex-wrap items-end justify-start gap-[29.2px] max-w-full text-sm text-gray-200">
            <div className="flex-1 bg-white flex flex-row items-end justify-start pt-[11.3px] pb-[12.7px] pr-5 pl-6 box-border gap-[29.6px] min-w-[139px] mq450:flex-wrap">
              {/* AANYA!! REPLACE BELOW DIV WITH YOUR DROPDOWN FIELD  */}
              <div className="flex-1 relative leading-[22.4px] inline-block min-w-[34px]">{`Search `}</div>
              <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[3.5px]">
                <img
                  className="w-3.5 h-3.5 relative overflow-hidden shrink-0"
                  alt=""
                  src="/icon.svg"
                />
              </div>
            </div>
            <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[16.3px] text-white">
              <div className="relative leading-[23px] inline-block min-w-[15px]">
                or
              </div>
            </div>
            <button className="cursor-pointer [border:none] pt-[8.2px] pb-[9.8px] pr-[25.6px] pl-[26px] bg-sandybrown rounded-31xl flex flex-row items-start justify-start whitespace-nowrap hover:bg-sienna">
              <a
                className="relative text-base leading-[25.6px] font-open-sans text-white text-left inline-block [text-decoration:none] min-w-[125.1px]"
                href="https://www.summerschools.com/contact-us"
                target="_blank"
              >
                Make an enquiry
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
