import { useMemo } from "react";

const FrameComponent6 = ({
  heading3OxfordSummerCours,
  oxfordSummerCourseHref,
  oxfordSummerCoursesWasEst,
  byTwoOxfordUniversityAlum,
  hortynAndRobertPhippsOffe,
  rangeOfOver40SubjectsTail,
  propWidth,
  propDisplay,
}) => {
  const heading3Style = useMemo(() => {
    return {
      width: propWidth,
      display: propDisplay,
    };
  }, [propWidth, propDisplay]);

  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[10.2px] text-left text-5xl text-darkslategray-200 font-domine">
      <h3
        className="m-0 w-[286.1px] relative text-inherit leading-[32.4px] font-normal font-inherit flex items-center shrink-0 [debug_commit:1de1738] mq450:text-lgi mq450:leading-[26px]"
        style={heading3Style}
      >
        {heading3OxfordSummerCours}
      </h3>
      <div className="self-stretch overflow-hidden flex flex-row items-end justify-start pt-0 pb-[0.8px] pr-[7px] pl-0 shrink-0 [debug_commit:1de1738] text-base font-open-sans">
        <a
          className="relative leading-[25.6px] text-[inherit] [text-decoration:none]"
          href={oxfordSummerCourseHref}
          target="_blank"
        >
          <p className="m-0">{oxfordSummerCoursesWasEst}</p>
          <p className="m-0">{byTwoOxfordUniversityAlum}</p>
          <p className="m-0">{hortynAndRobertPhippsOffe}</p>
          <p className="m-0">{rangeOfOver40SubjectsTail}</p>
        </a>
      </div>
    </div>
  );
};

export default FrameComponent6;
