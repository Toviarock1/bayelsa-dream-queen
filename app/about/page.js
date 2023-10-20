import React from "react";
import Image from "next/image";
import herobg from "./../../public/abouthero.svg";

const about = () => {
  return (
    <>
      <section className="px-[1rem] md:px-32 py-28 z-10 relative aboutbg flex justify-center items-center rounded-b-3xl">
        <div className="flex justify-center items-center">
          <div>
            <h2 className="text-white font-secondary text-5xl font-bold mb-6">
              About Us
            </h2>
          </div>
        </div>
      </section>
      <section className="px-[1rem] md:px-32 py-28 z-10 relative">
        <div className="md:flex justify-center items-center">
          <div className="md:w-1/2 text-black pr-8">
            <h2 className="text-black font-secondary text-6xl font-bold mb-6">
              Preamble
            </h2>
            <p className="font-primary text-xl font-light mb-5 text-black">
              THE NIGERIAN QUEEN (beauty for purpose) beauty pageant is a brand
              from 001 Entertainment outfit, targeted at redefining beauty with
              a connotation of purpose, and with a sole aim of carrying out
              humanitarian activities.
            </p>
            <p className="font-primary text-xl font-light mb-5 text-black">
              Our Pedigree for The Nigerian Queen pageant is a search of rare
              combination of beauty and brains. Impeccable young ladies that
              would uphold strong values, beauty, intellects and prestige. The
              Nigerian Queen (beauty for purpose) is a prestigious Crown that
              goes beyond physical beauty, the organization aim at helping young
              girls find their true essence. We search for women that have a big
              heart towards society, we believe in uplifting and giving a voice
              to those who have the courage to stand out.
            </p>
            <p className="font-primary text-xl font-light mb-5 text-black">
              This platform is all about Impact, not just a beautiful girl with
              a designer gown and a crown, But a girl that can create long
              lasting Impact and change the world in her own little way. A
              platform that develop potentials and talents, using pageantry as a
              tool for promoting peace, progress and youth development.
            </p>
            <p className="font-primary text-xl font-light mb-5 text-black">
              This platform is all about Impact, not just a beautiful girl with
              a designer gown and a crown, But a girl that can create long
              lasting Impact and change the world in her own little way. A
              platform that develop potentials and talents, using pageantry as a
              tool for promoting peace, progress and youth development.
            </p>
            <p className="font-primary text-xl font-light mb-5 text-black">
              We believe that change will come if we all command it from our own
              little corner; our pageantry platform also helps to project and
              celebrate our unique rich cultural heritage to every part of
              Africa and the entire world at large.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <Image src={herobg} />
          </div>
        </div>
      </section>
    </>
  );
};

export default about;
