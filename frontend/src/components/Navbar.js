import { useCallback } from "react";
import { Link } from 'react-router-dom';

// AANYA!! SURPRISE FOR YOU ON ALL THE LINKS XD
const Navbar = () => {
  const onLogoClick = useCallback(() => {
    window.open("https://iciss.isrdc.in/");
  }, []);

  const onLinkAdvisoryClick = useCallback(() => {
    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
  }, []);

  const onLinkAboutClick = useCallback(() => {
    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
  }, []);

  const onLinkAllClick = useCallback(() => {
    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
  }, []);

  return (
    <header className="self-stretch bg-whitesmoke-100 flex flex-row items-start justify-start py-0 px-[70px] box-border top-[0] z-[99] sticky max-w-full text-left text-base text-black font-domine mq800:pl-[35px] mq800:pr-[35px] mq800:box-border">
      <div className="flex-1 bg-whitesmoke-100 box-border flex flex-row items-start justify-between py-0 pr-0 pl-[24.3px] max-w-full gap-[20px] border-b-[1px] border-solid border-gainsboro-200">
        <div className="w-[151.5px] flex flex-col items-start justify-start pt-[19.5px] px-0 pb-0 box-border">
          <img
            className="self-stretch h-10 relative max-w-full overflow-hidden shrink-0 object-cover cursor-pointer"
            loading="lazy"
            alt=""
            src="/logo.png"
            onClick={onLogoClick}
          />
        </div>
        <div className="w-[1038px] bg-whitesmoke-100 box-border flex flex-row items-start justify-start pt-[18.3px] pb-[18px] pr-10 pl-[61px] gap-[21px] max-w-full border-b-[1px] border-solid border-gainsboro-200 mq1150:w-[892.1px] mq1150:pl-[30px] mq1150:box-border">
          <div className="flex flex-col items-start justify-start pt-[6.6px] pb-0 pr-[8.4px] pl-0 text-gray-200">
            <div className="flex flex-row items-end justify-start gap-[20px]">
              <div className="flex flex-col items-start justify-start py-0 pr-[7.6px] pl-0">
                <b className="relative leading-[26px] inline-block min-w-[48px]">
                  About
                </b>
              </div>
              <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[4.4px]">
                <img
                  className="w-3.5 h-3.5 relative overflow-hidden shrink-0"
                  alt=""
                  src="/icon.svg"
                />
              </div>
              <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[3.5px]">
                <div className="w-px h-[15.8px] relative bg-darkgray-100" />
              </div>
            </div>
          </div>
          <div className="w-[100.5px] flex flex-col items-start justify-start pt-[7.6px] px-0 pb-0 box-border text-gray-200">
            <div className="self-stretch flex flex-row items-end justify-start">
              <b className="flex-1 relative leading-[25.6px]">Schedule</b>
              <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[5px]">
                <img
                  className="w-3.5 h-3.5 relative overflow-hidden shrink-0"
                  alt=""
                  src="/icon.svg"
                />
              </div>
            </div>
          </div>
          <div className="h-[15.8px] w-px relative bg-darkgray-100 hidden" />
          <div className="flex flex-col items-start justify-start pt-[13.3px] pb-0 pr-1 pl-0">
            <div className="w-px h-[15.8px] relative bg-darkgray-100" />
          </div>
          <div className="flex flex-col items-start justify-start pt-[7.6px] pb-0 pr-[3.8px] pl-0 box-border mq1150:hidden mq1150:w-[3.8000000000000114px]">
            <b
              className="self-stretch relative leading-[25.6px] whitespace-nowrap cursor-pointer mq1150:hidden"
              onClick={onLinkAdvisoryClick}
            >
              Get in touch
            </b>
          </div>
          <div className="flex flex-col items-start justify-start pt-[9.7px] pb-0 pr-1 pl-0">
            <div className="flex flex-row items-start justify-start gap-[19.7px]">
              <div className="flex flex-col items-start justify-start pt-[3.6px] px-0 pb-0">
                <div className="w-px h-[15.8px] relative bg-darkgray-100" />
              </div>
              <b
                className="relative inline-block min-w-[82px] cursor-pointer"
                onClick={onLinkAboutClick}
              >
                Programs
              </b>
              <div className="flex flex-col items-start justify-start pt-[3.6px] px-0 pb-0">
                <div className="w-px h-[15.8px] relative bg-darkgray-100" />
              </div>
            </div>
          </div>
          <div className="w-[106.8px] flex flex-col items-start justify-start pt-[7.6px] pb-0 pr-1 pl-0 box-border">
            <b
              className="self-stretch relative leading-[25.6px] cursor-pointer"
              onClick={onLinkAllClick}
            >
              Review
            </b>
          </div>
          <div className="flex-1 flex flex-row items-start justify-start gap-[16px] text-sm text-white font-merriweather">
            <div>
            <button className="cursor-pointer border-none py-2 px-6 bg-sandybrown rounded-31xl flex flex-row items-start justify-start whitespace-nowrap hover:bg-sienna">
             <Link
               to="./login"
                  className="relative text-base font-open-sans text-white text-left inline-block text-decoration-none"
              >
               Login
             </Link>
             </button>

            </div>
            <div className="flex flex-col items-start justify-start pt-[10.7px] px-0 pb-0">
              <div className="w-12 h-[17.5px] relative shrink-0 [debug_commit:1de1738]">
                <img
                  className="absolute top-[3.5px] left-[34px] w-3.5 h-3.5 overflow-hidden"
                  alt=""
                  src="/icon.svg"
                />
                <img
                  className="absolute top-[0px] left-[0px] w-[26px] h-[16.1px] object-cover"
                  alt=""
                  src="/india-flag-1@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
