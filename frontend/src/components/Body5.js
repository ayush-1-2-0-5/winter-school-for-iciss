import { useCallback } from "react";

const Body5 = () => {
  const onLinkContainerClick = useCallback(() => {
    window.open("https://www.summerschools.com/all-courses");
  }, []);

  const onLinkContainer2Click = useCallback(() => {
    window.open("https://www.summerschools.com/#faq");
  }, []);

  const onLinkContainer1Click = useCallback(() => {
    window.open("https://www.summerschools.com/contact-us");
  }, []);

  return (
    <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[15px] pl-3 box-border max-w-full text-left text-22xl-6 text-white font-domine">
      <div className="w-[1431px] bg-gray-300 flex flex-row items-end justify-start pt-[69.4px] px-[72px] pb-[82px] box-border gap-[108.2px] max-w-[107%] shrink-0 mq800:gap-[27px] mq1350:flex-wrap mq1350:gap-[54px] mq1350:pl-9 mq1350:pr-9 mq1350:box-border">
        <div className="w-[599.7px] flex flex-col items-start justify-end pt-0 px-0 pb-[4.9px] box-border min-w-[599.7px] max-w-full mq1150:min-w-full mq1350:flex-1">
          <div className="self-stretch h-[112.3px] relative tracking-[-1.66px] leading-[56.16px] flex items-center shrink-0 mq800:text-14xl mq800:leading-[45px] mq450:text-6xl mq450:leading-[34px]">
            <span>
              <p className="m-0">Giving you the best start for your</p>
              <p className="m-0">Information Systems Security journey</p>
            </span>
          </div>
        </div>
        <div className="w-[516.6px] flex flex-row items-start justify-between min-w-[516.6px] max-w-full gap-[20px] text-center text-base font-open-sans mq800:min-w-full mq450:flex-wrap mq1350:flex-1">
          <div
            className="flex flex-col items-start justify-start pt-0 px-0 pb-[0.4px] gap-[11.2px] cursor-pointer"
            onClick={onLinkContainerClick}
          >
            <div className="flex flex-row items-start justify-start py-0 pr-[26px] pl-[26.1px]">
              <img
                className="h-[66px] w-[66px] relative overflow-hidden shrink-0 object-cover"
                loading="lazy"
                alt=""
                src="/65fc4d064f29867d120a0c50-allcoursessvg@2x.png"
              />
            </div>
            <a
              className="relative [text-decoration:underline] leading-[26px] text-[inherit] inline-block min-w-[119px] whitespace-nowrap"
              href="https://www.summerschools.com/all-courses"
              target="_blank"
            >
              View all courses
            </a>
          </div>
          <div className="flex flex-col items-start justify-start py-0 pr-[13.4px] pl-0">
            <div
              className="flex flex-col items-end justify-start pt-0 px-0 pb-[0.4px] gap-[11.2px] cursor-pointer"
              onClick={onLinkContainer2Click}
            >
              <img
                className="w-[66px] h-[67px] relative overflow-hidden shrink-0 object-cover"
                loading="lazy"
                alt=""
                src="/65fc4ddd9a8101405113cfd5-faqsvg@2x.png"
              />
              <div className="flex flex-row items-start justify-end py-0 pr-[13.2px] pl-3.5">
                <a
                  className="relative [text-decoration:underline] leading-[26px] text-[inherit] inline-block min-w-[39px]"
                  href="https://www.summerschools.com/#faq"
                  target="_blank"
                >
                  FAQs
                </a>
              </div>
            </div>
          </div>
          <div
            className="flex flex-col items-start justify-start pt-0 px-0 pb-[0.4px] gap-[11.2px] cursor-pointer"
            onClick={onLinkContainer1Click}
          >
            <div className="flex flex-row items-start justify-start py-0 pr-3 pl-[12.6px]">
              <img
                className="h-[66px] w-[66px] relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/65fc4e05cd1f574353d24fd5-get20in20touchsvg.svg"
              />
            </div>
            <a
              className="relative [text-decoration:underline] leading-[26px] text-[inherit] inline-block min-w-[92px] whitespace-nowrap"
              href="https://www.summerschools.com/contact-us"
              target="_blank"
            >
              Get in touch
            </a>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Body5;
