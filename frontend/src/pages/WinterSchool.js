import Navbar from "../components/Navbars/Navbar";
import Hero from "../components/Frontpage/Hero";
import Body1 from "../components/Frontpage/Body1";
import Body3 from "../components/Body3";
import Footer from "../components/Frontpage/Footer";
import Body2 from "../components/Frontpage/Body2";
import Body4 from "../components/Frontpage/Body4";
import Body5 from "../components/Frontpage/Body5";
import Body6 from "../components/Frontpage/Body6";
import Faq from "../components/Faq";
import Body7 from "../components/Frontpage/Body7";

const WinterSchool = () => {
  return (
    <div className="w-full relative bg-white flex flex-col items-end justify-start pt-0 px-0 pb-[0.1px] box-border gap-[6px] leading-[normal] tracking-[normal] overflow-x-hidden">
      <Navbar/>
      <section className="w-[1404.8px] flex flex-col items-end justify-start pt-0 pb-[73px] pr-[27.8px] pl-7 box-border gap-[58.4px] max-w-full mq800:gap-[29px] mq800:pb-5 mq800:box-border mq1350:pb-[31px] mq1350:box-border">
        <Hero />
        <Body1 />
      </section>
      <section className="w-[1392px] flex flex-col items-start justify-start pt-0 pb-16 pr-0 pl-5 box-border max-w-full text-left text-22xl-6 text-white font-domine mq800:pb-[88px] mq800:box-border mq1350:pb-[136px] mq1350:box-border">
        <Body2 />
        <Body3 />
        <Body4 />
        <Body5 />
      </section>
      <section className="w-[1401px] flex flex-col items-start justify-start pt-0 pb-64 pr-0 pl-5 box-border gap-[69.5px] max-w-full mq800:gap-[35px] mq800:pb-[68px] mq800:box-border mq1150:pb-[105px] mq1150:box-border mq450:gap-[17px] mq1350:pb-[162px] mq1350:box-border">
        <Body6 />
        <Faq />
      </section>
      <Body7 />
      <Footer />
    </div>
  );
};

export default WinterSchool;