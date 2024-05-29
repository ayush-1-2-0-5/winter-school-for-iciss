const FrameComponent4 = ({
  a4d06e81233114201417e6161,
  subjectsAndCoursesAreDeli,
  a4d06e81233114201417e61611,
  tutorsAreExpertsAndPassio,
}) => {
  return (
    <div className="flex flex-col items-start justify-start pt-0 pb-3 pr-5 pl-0 box-border gap-[15.6px] max-w-full shrink-0 text-left text-mid-6 text-darkslategray-100 font-open-sans">
      <div className="flex flex-row items-end justify-start gap-[20px]">
        <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[9.7px]">
          <img
            className="w-[9px] h-[9px] relative overflow-hidden shrink-0 object-cover"
            alt=""
            src={a4d06e81233114201417e6161}
          />
        </div>
        <div className="relative leading-[33px]">
          {subjectsAndCoursesAreDeli}
        </div>
      </div>
      <div className="flex flex-row items-end justify-start gap-[20px] max-w-full">
        <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[9.7px]">
          <img
            className="w-[9px] h-[9px] relative overflow-hidden shrink-0 object-cover"
            alt=""
            src={a4d06e81233114201417e61611}
          />
        </div>
        <div className="relative leading-[33px]">
          {tutorsAreExpertsAndPassio}
        </div>
      </div>
    </div>
  );
};

export default FrameComponent4;
