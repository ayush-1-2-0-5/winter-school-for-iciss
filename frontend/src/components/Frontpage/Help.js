import React from "react";

const Help = () => {
  return (
    <form className="m-0 h-[501.8px] w-[392.6px] rounded-xl bg-gray-300 flex flex-col items-end justify-start pt-[30.8px] px-[31px] pb-[46px] box-border gap-[29px] min-w-[392.6px] max-w-full mq800:pt-5 mq800:pb-[30px] mq800:box-border mq800:min-w-full mq1150:flex-1">
      <div className="self-stretch flex-1 flex flex-col items-end justify-start gap-[20px]">
        <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
          <h3 className="m-0 w-[122.5px] relative text-5xl tracking-[-0.96px] leading-[32.4px] font-normal font-domine text-white text-center flex items-center justify-center shrink-0 min-w-[122.5px] mq450:text-lgi mq450:leading-[26px]">
            Need Help?
          </h3>
        </div>
        <div className="self-stretch rounded-8xs bg-white flex flex-row items-start justify-start py-[11px] pr-3 pl-5 border-[1px] border-solid border-lightgray">
          <input
            className="w-full [border:none] [outline:none] bg-[transparent] h-6 flex-1 overflow-hidden flex flex-row items-start justify-start pt-0 px-0 pb-0 box-border font-open-sans text-lg text-darkgray-200 min-w-[178px]"
            placeholder="Full Name"
            type="text"
          />
        </div>
        <div className="self-stretch rounded-8xs bg-white flex flex-row items-start justify-start py-[11px] pr-3 pl-5 border-[1px] border-solid border-lightgray">
          <input
            className="w-full [border:none] [outline:none] bg-[transparent] h-6 flex-1 overflow-hidden flex flex-row items-start justify-start pt-0 px-0 pb-0 box-border font-open-sans text-lg text-darkgray-200 min-w-[178px]"
            placeholder="Email Address"
            type="text"
          />
        </div>
        <div className="self-stretch rounded-8xs bg-white flex flex-row items-start justify-start py-[17px] px-[21px] border-[1px] border-solid border-lightgray">
          <input
            className="w-[126.1px] [border:none] [outline:none] font-open-sans text-lg bg-[transparent] h-6 relative text-darkgray-200 text-left flex items-center p-0"
            placeholder="Phone number"
            type="text"
          />
        </div>
        <div className="self-stretch flex-1 relative  px-[21px] rounded-8xs bg-white overflow-hidden border-[1px] border-solid border-lightgray">
          <input
            className="[border:none] [outline:none] font-open-sans text-lg bg-[transparent] relative text-darkgray-200 flex items-center"
            placeholder="Type your message"
            type="text"
          />
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[60.3px] pl-[60px] mq450:pl-5 mq450:pr-5 mq450:box-border">
        <button className="cursor-pointer pt-2 px-[26px] pb-[9px] bg-peru flex-1 rounded-31xl flex flex-row items-start justify-start whitespace-nowrap border-[1px] border-solid border-[#2c2e73] hover:bg-chocolate-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-dimgray">
          <div className="flex-1 relative text-xl leading-[32px] font-open-sans text-white text-center">
            Make an enquiry
          </div>
        </button>
      </div>
    </form>
  );
};

export default Help;
