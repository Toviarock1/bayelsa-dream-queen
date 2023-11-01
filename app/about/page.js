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
          <div className="md:w-2/3 text-black pr-8">
            <h2 className="text-black font-secondary text-6xl font-bold mb-6">
              Preamble
            </h2>
            <p className="font-primary text-xl font-light mb-5 text-black">
              <b>
                BAYELSA DREAM QUEEN (beauty that inspires), is an unprecedented
                Peace and Cultural beauty pageant brand which is a Brainchild of
                Caryn International Production. The sole aim is targeted at
                redefining pageantry beyond humanitarianism
              </b>
              . This beauty pageant seeks to inspire this generation by
              identifying and bringing solutions to pressing issues in the State
              and Niger Delta Region at large, the appreciation of social
              development and how the their individual input can challenge the
              status quo and contribute positively to the Nation’s growing
              profile.
            </p>
            <p className="font-primary text-xl font-light mb-5 text-black">
              BDQ is practically task to produce the most stylish, bold, brainy,
              brave and beautiful Bayelsa maidens who possess revolutionary and
              realistic ideas to be implemented towards the progressive
              advancement of Bayelsa and the Niger Delta Region. Simply; it’s
              developed as a most anticipate contest where participants would
              always be required to exhibite beside physical beauty,
              intellectual capability, especially in the area of development:
              social and economic.
            </p>
            <p className="font-primary text-xl font-light mb-5 text-black">
              Bayelsa Dream Queen is a healthy competitive unique brand. It is a
              creative innovation to step up beauty pageants, a concept that
              brings attraction and encourages and gives platforms that helps
              young girls find their true essence. It is a search of rare
              combination of beauty and brains. Impeccable young ladies that
              would uphold strong values, beauty, intellects and prestige. We
              search for women that have a big heart towards society, we believe
              in uplifting and giving a voice to those who have the courage to
              stand out.
            </p>
            <p className="font-primary text-xl font-light mb-5 text-black">
              A platform that develop potentials and talents, using pageantry as
              a tool for promoting peace, progress and youth development. We are
              also intentional by using BDQ to promote and celebrate our unique
              rich cultural heritage to every part of Nigeria, Africa and the
              entire world at large.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default about;
