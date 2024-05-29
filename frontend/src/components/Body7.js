import { useCallback } from "react";

const Body7 = () => {
  const onListitemLinkClick = useCallback(() => {
    window.open(
      "https://www.summerschools.com/blogs/when-are-cambridge-university-interviews"
    );
  }, []);

  const onListitemLink1Click = useCallback(() => {
    window.open(
      "https://www.summerschools.com/blogs/a-day-in-the-life-of-a-summer-school-student"
    );
  }, []);

  const onListitemLink2Click = useCallback(() => {
    window.open(
      "https://www.summerschools.com/blogs/discover-the-benefits-of-a-summer-school-for-learning-english"
    );
  }, []);

  return (
    <section className="w-[1318px] flex flex-row items-start justify-end pt-0 px-[9px] pb-[19.7px] box-border max-w-full text-left text-22xl-6 text-gray-300 font-domine">
      <div className="flex-1 flex flex-col items-start justify-start gap-[48px] max-w-full mq800:gap-[24px]">
        <div className="self-stretch flex flex-row items-start justify-between py-0 pr-1 pl-0 box-border gap-[20px] max-w-full mq800:flex-wrap">
          <div className="relative leading-[57px] inline-block max-w-full mq800:text-14xl mq800:leading-[45px] mq450:text-6xl mq450:leading-[34px]">
            View our recent blogs
          </div>
          <div className="flex flex-col items-start justify-start pt-[1.9px] px-0 pb-0">
            <button className="cursor-pointer [border:none] pt-[8.2px] pb-[9.4px] pr-[25px] pl-[26px] bg-sandybrown rounded-31xl flex flex-row items-start justify-start whitespace-nowrap hover:bg-sienna">
              <a
                className="relative text-base leading-[26px] font-open-sans text-white text-left inline-block [text-decoration:none] min-w-[101px]"
                href="https://www.summerschools.com/blogs"
                target="_blank"
              >
                View all blogs
              </a>
            </button>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-1 box-border max-w-full text-5xl text-darkslategray-200">
          <div className="flex-1 grid flex-row items-start justify-start gap-[30px] max-w-full grid-cols-[repeat(3,_minmax(309px,_1fr))] mq800:grid-cols-[minmax(309px,_1fr)] mq1150:justify-center mq1150:grid-cols-[repeat(2,_minmax(309px,_536px))]">
            <div
              className="rounded-xl bg-whitesmoke-200 flex flex-col items-start justify-start pt-0 px-0 pb-[60.7px] box-border gap-[28px] max-w-full cursor-pointer mq800:pb-[39px] mq800:box-border"
              onClick={onListitemLinkClick}
            >
              <img
                className="self-stretch h-[184px] relative rounded-t-3xs rounded-b-none max-w-full overflow-hidden shrink-0 object-cover"
                loading="lazy"
                alt=""
                src="/654519fa3e0a8dda5e7f271b-pexelstimamiroshnichenko5336969p500jpg@2x.png"
              />
              <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[17px] pl-[16.8px] box-border max-w-full">
                <div className="flex-1 flex flex-col items-start justify-start gap-[11.7px] max-w-full">
                  <div className="self-stretch rounded-t-3xs rounded-b-none flex flex-row items-end justify-start pt-0 pb-8 pr-[3px] pl-0 box-border max-w-full shrink-0">
                    <h3 className="m-0 flex-1 relative text-inherit leading-[33px] font-normal font-inherit inline-block max-w-full mq450:text-lgi mq450:leading-[26px]">
                      What is Cryptology?
                    </h3>
                  </div>
                  <div className="self-stretch relative text-mid-6 leading-[32.56px] font-open-sans text-darkslategray-100">
                    Cryptography, or cryptology, is the practice and study of
                    techniques for secure communication in the presence of
                    adversarial behavior.
                  </div>
                </div>
              </div>
            </div>
            <div
              className="rounded-xl bg-whitesmoke-200 flex flex-col items-start justify-start pt-0 px-0 pb-[93px] box-border gap-[28px] min-h-[479px] max-w-full cursor-pointer mq800:pb-[60px] mq800:box-border"
              onClick={onListitemLink1Click}
            >
              <div className="self-stretch h-[184px] relative rounded-t-3xs rounded-b-none overflow-hidden shrink-0 bg-[url('/public/65141353219664bffe6b4c49-stormyallo3kezy1bjequnsplashp500jpg@3x.png')] bg-cover bg-no-repeat bg-[top]">
                <img
                  className="absolute h-[191.85%] w-[152.43%] top-[-46.2%] right-[-26.21%] bottom-[-45.65%] left-[-26.21%] max-w-full overflow-hidden max-h-full object-cover hidden"
                  alt=""
                  src="/cyber-1@2x.png"
                />
                <img
                  className="absolute h-[149.29%] w-full top-[0%] right-[0%] bottom-[-49.29%] left-[0%] max-w-full overflow-hidden max-h-full object-cover hidden"
                  alt=""
                  src="/cyber.jpg"
                />
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[17px] pl-[16.8px] box-border max-w-full">
                <div className="flex-1 flex flex-col items-start justify-start gap-[11.7px] max-w-full">
                  <div className="self-stretch rounded-t-3xs rounded-b-none flex flex-row items-end justify-start pt-0 px-0 pb-8 box-border max-w-full">
                    <h3 className="m-0 w-[329.6px] relative text-inherit leading-[33px] font-normal font-inherit flex items-center shrink-0 max-w-full mq450:text-lgi mq450:leading-[26px]">
                      How can we secure us?
                    </h3>
                  </div>
                  <div className="w-[346px] relative text-mid-6 leading-[32.56px] font-open-sans text-darkslategray-100 flex items-center max-w-full">
                    Cybersecurity is the practice of protecting systems,
                    networks, and programs from digital attacks. 
                  </div>
                </div>
              </div>
            </div>
            <div
              className="h-[479.4px] rounded-xl bg-whitesmoke-200 flex flex-col items-start justify-start pt-0 px-0 pb-[158.2px] box-border gap-[40px] max-w-full cursor-pointer mq800:pb-[103px] mq800:box-border mq450:gap-[20px]"
              onClick={onListitemLink2Click}
            >
              <img
                className="self-stretch flex-1 relative rounded-t-3xs rounded-b-none max-w-full overflow-hidden max-h-full object-cover"
                loading="lazy"
                alt=""
                src="/6514146f194c1a8ee0fa211c-clarissawatsonjaebodq7oxkunsplashp500jpg@2x.png"
              />
              <div className="w-[398.4px] h-[97.2px] rounded-t-3xs rounded-b-none flex flex-row items-start justify-start py-0 pr-5 pl-0 box-border relative max-w-full">
                <h3 className="!m-[0] w-[321.4px] absolute top-[-21.7px] left-[28.2px] text-inherit leading-[33px] font-normal font-inherit flex items-center mq450:text-lgi mq450:leading-[26px]">
                  New Technologies
                </h3>
                <div className="w-[356px] absolute !m-[0] right-[25.4px] bottom-[-68.8px] text-mid-6 leading-[32.56px] font-open-sans text-darkslategray-100 flex items-center z-[1]">
                  Technology today is evolving at a rapid pace, enabling faster
                  change and progress, causing an acceleration of the rate of
                  change.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Body7;
