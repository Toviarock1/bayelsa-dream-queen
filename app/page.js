"use client";

import Image from "next/image";
import hero from "./../public/hero.svg";
import image2 from "./../public/image2.svg";
import image3 from "./../public/marketing.png";
import image4 from "./../public/image4.png";
import image5 from "./../public/image5.png";
import image6 from "./../public/image6.png";
import partner1 from "./../public/partner1.svg";
import partner2 from "./../public/partner2.svg";
import partner3 from "./../public/partner3.svg";
import partner4 from "./../public/partner4.svg";
import partner5 from "./../public/partner5.svg";
import partner6 from "./../public/partner6.svg";
import Card from "./components/Card";
import FaqDropDown from "./components/FaqDropDown";

export default function Home() {
  return (
    <main>
      <section className="px-[1rem] md:px-32 indexbg h-[900px]"></section>
      <section className="px-[1rem] md:px-32 py-28 bg-[#290604] z-10 relative">
        <div className="md:flex justify-center items-center">
          <div className="md:w-1/2">
            <h2 className="text-[#BF9B30] font-secondary text-8xl font-bold mb-6">
              BDQ Brand.
            </h2>
            <p className="font-primary text-2xl font-light mb-5 text-white">
              The Bayelsa Dream Queen is a prestigious Crown that goes beyond
              physical beauty, the organization aim at helping young girls find
              their true essence. We search for women that have a big heart
              towards society, we believe in uplifting and giving a voice to
              those who have the courage to stand out.
            </p>
            <button className="bg-black rounded-full text-white px-8 py-4">
              Learn more
            </button>
          </div>
          <div className="md:w-1/2 flex justify-center mt-4 md:mt-0">
            <Image src={image2} />
          </div>
        </div>
      </section>
      <section className="px-[1rem] md:px-32 py-28 z-10 relative">
        <div>
          <h2 className="text-[#150A24] font-primary text-3xl font-bold mb-6 text-center">
            WHAT WE DO
          </h2>
          <p className="font-primary text-xl font-light mb-5 text-black text-center">
            The Bayelsa Dream Queen position has evolved from being the company
            to formally represent international models only to now handling
            Talents as a multinational B2B platform as a result of its
            establishment
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-7">
            <Card
              image={image3}
              text={"Digital Marketing"}
              alt={"digital marketing"}
            />
            <Card
              image={image4}
              text={"Live Event Marketing"}
              alt={"Live Event Marketing"}
            />
            <Card image={image5} text={"Pageant"} alt={"Pageant"} />
            <Card image={image6} text={"Fashion Shows"} alt={"Fashion Shows"} />
          </div>
          <div className="text-center mt-5">
            <button className="bg-[#BF9B30] text-white text-center py-3 px-10 rounded-full">
              Know more
            </button>
          </div>
        </div>
      </section>
      <section className="px-[1rem] md:px-32 bg-[#BF9B30] py-10 mt-2 md:flex justify-between">
        <div>
          <Image src={partner1} alt="partner 1" />
        </div>
        <div>
          <Image src={partner2} alt="partner 1" />
        </div>
        <div>
          <Image src={partner3} alt="partner 1" />
        </div>
        <div>
          <Image src={partner4} alt="partner 1" />
        </div>
        <div>
          <Image src={partner5} alt="partner 1" />
        </div>
        <div>
          <Image src={partner6} alt="partner 1" />
        </div>
      </section>
      <section className="px-[1rem] md:px-32 py-28 bg -mt-[184px] z-10 relative mt-2">
        <div className="flex flex-col flex-col-reverse gap-2 md:flex-row justify-center items-center mt-20">
          <div className="md:w-1/2">
            <FaqDropDown />
          </div>
          <div className="md:w-1/2">
            <p className="text-black font-primary text-base text-end font-light mb-5">
              YOUR QUESTIONS ANSWERED
            </p>
            <h1 className="text-black font-secondary text-4xl font-semibold mb-6 text-end">
              Common Questions
            </h1>
            <p className="font-primary text-base font-light mb-5 text-end">
              A few more questions our members usually ask,
              <br /> you might find them helpful or can also use the form below
              to request yours.
            </p>
            <div className="flex justify-end">
              <button className="bg-[#BF9B30] rounded-full text-white px-8 py-4 text-end">
                Become A Contestant
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="px-[1rem] md:px-32 py-28 bg-[#290604] z-10 relative">
        <div className="">
          <div className="">
            <h2 className="text-white text-center font-primary font-secondary text-xl md:text-2xl font-light mb-6">
              If You Would Like To Submit Your Profile To Us For Consideration,
              Please Send An Email To Contact@BayelsaDreamQueen.Com
            </h2>
            <p className="text-white text-center font-primary font-secondary text-base font-light mb-6">
              A Brief statement of purpose – at least 300 words describing the
              purpose and your plans to connect with us
            </p>
            <div className="flex justify-center">
              <button className="bg-[#BF9B30] rounded-full text-white px-8 py-4 text-end">
                GO FOR SUBMISSION
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
