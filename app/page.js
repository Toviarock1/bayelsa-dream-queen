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
import partner7 from "./../public/7 1.svg";
import partner8 from "./../public/8 1.svg";
import partner9 from "./../public/9 1.svg";
import partner10 from "./../public/10 1.svg";
import Card from "./components/Card";
import FaqDropDown from "./components/FaqDropDown";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import slide1 from "./../public/bold brainy brave beautiful.svg";
import slide2 from "./../public/car 1.svg";
import slide3 from "./../public/Car write 1.svg";
import slide4 from "./../public/BDQ LOGO & WRITE 1.svg";
import hero2 from "./../public/Group 12777.svg";
import hero3 from "./../public/Group 12779.svg";
import hero4 from "./../public/model 2 1.svg";
import hero5 from "./../public/bold.svg";
import hero6 from "./../public/Group 12780.svg";
import hero7 from "./../public/Group 12781.svg";
import hero8 from "./../public/Model2.svg";
import hero9 from "./../public/dd.svg";

export default function Home() {
  return (
    <main>
      {/* <section className="px-[1rem] md:px-32 indexbg2">
        <h2 className=" text-lg font-medium uppercase tracking-[4px] md:tracking-[27px] text-center text-white pt-14">
          entreprenuershipedition
        </h2>
        <div className="flex mt-16 ">
          <div>
            <Image src={slide1} />
          </div>
          <div>
            <Image src={slide2} />
          </div>
        </div>
        <div className="flex items-center justify-between md:block">
          <div className="md:absolute bottom-1 left-40">
            <Image src={slide3} className="w-[70px] md:w-[339px]" />
          </div>
          <div>
            <Image
              src={slide4}
              className="ml-auto md:-mt-[146px] w-[70px] md:w-[258px] pb-5"
            />
          </div>
        </div>
      </section> */}
      {/*  */}
      <Swiper
        slidesPerView={1}
        // spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper h-[450px] md:h-[827px]"
      >
        <SwiperSlide>
          <section className="px-[1rem] md:px-32 indexbg2 py-10">
            <h2 className=" text-lg font-medium uppercase tracking-[4px] md:tracking-[27px] text-center text-white pt-14">
              entreprenuershipedition
            </h2>
            <div className="flex mt-16 ">
              <div>
                <Image src={slide1} />
              </div>
              <div>
                <Image src={slide2} />
              </div>
            </div>
            <div className="flex items-center justify-between md:block">
              <div className="md:absolute bottom-1 left-40">
                <Image src={slide3} className="w-[70px] md:w-[339px]" />
              </div>
              <div>
                <Image
                  src={slide4}
                  className="ml-auto md:-mt-[146px] w-[70px] md:w-[138px] pb-5"
                />
              </div>
            </div>
          </section>
        </SwiperSlide>
        {/* <SwiperSlide className="hidden md:block">
          <section className="px-[1rem] md:px-32 hero2 py-10 hidden md:block">
            <h2 className=" text-lg font-medium uppercase tracking-[4px] md:tracking-[27px] text-center text-white pt-14">
              entreprenuershipedition
            </h2>
            <div className="flex">
              <div className=" mt-16 ">
                <div>
                  <Image src={hero2} />
                </div>
                <div>
                  <Image src={hero3} />
                </div>
              </div>
              <div>
                <Image src={hero4} />
              </div>
            </div>
          </section>
        </SwiperSlide> */}
        <SwiperSlide>
          <section className="px-[1rem] md:px-32 hero2 py-10 slide">
            <h2 className=" text-lg font-medium uppercase tracking-[4px] md:tracking-[27px] text-center text-white pt-14">
              entreprenuershipedition
            </h2>
            <div className="flex justify-between">
              <div className=" mt-16 ">
                <div>
                  <Image src={hero3} />
                </div>
                <div className="p-2 w-[217px] e rounded-tl-3xl rounded-br-3xl mx-auto mt-14">
                  <div>
                    <p className="text-center mb-0 font-primary text-lg font-medium uppercase text-white">
                      no height or body size restriction
                    </p>
                  </div>
                </div>
              </div>
              <div className=" mt-16 ">
                <Image src={hero5} className="w-[376px]" />
                <div className="flex items-center w-20 md:w-auto">
                  <Image src={hero6} className="z-10" />
                  <Image src={hero7} className="-ml-5" />
                </div>
              </div>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className="px-[1rem] md:px-32 py-10 indexbg2">
            <h2 className=" text-lg font-medium uppercase tracking-[4px] md:tracking-[27px] text-center text-white pt-14">
              entreprenuershipedition
            </h2>
            <div className="flex justify-between">
              <div className=" mt-16 ">
                <div>
                  <Image src={hero8} />
                </div>
              </div>
              <div className=" mt-16 ">
                <Image src={hero3} className="w-[376px]" />
                <div className="mt-2">
                  <Image src={hero9} className="mx-auto" />
                </div>
              </div>
            </div>
          </section>
        </SwiperSlide>
      </Swiper>
      {/*  */}
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
            <button className="bg-white rounded-full text-black px-8 py-4">
              Learn more
            </button>
          </div>
          <div className="md:w-1/2 flex justify-center mt-4 md:mt-0">
            <Image src={image2} alt="img" />
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
            <a href="/about" className="text-white no-underline w-full">
              <button className="bg-[#BF9B30] text-white text-center py-3 px-10 rounded-full">
                Know more
              </button>
            </a>
          </div>
        </div>
      </section>
      {/* work on slider */}
      <Swiper
        // onSwiper={setSwiperRef}
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper mt-6 bg-[#BF9B30] py-3"
      >
        <SwiperSlide>
          <Image src={partner1} alt="partner 1" className="mx-auto py-3" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={partner2} alt="partner 1" className="mx-auto py-3" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={partner3} alt="partner 1" className="mx-auto py-3" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={partner4} alt="partner 1" className="mx-auto py-3" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={partner5} alt="partner 1" className="mx-auto py-3" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={partner6} alt="partner 1" className="mx-auto py-3" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={partner7} alt="partner 1" className="mx-auto py-3" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={partner8} alt="partner 1" className="mx-auto py-3" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={partner9} alt="partner 1" className="mx-auto py-3" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={partner10} alt="partner 1" className="mx-auto py-3" />
        </SwiperSlide>
      </Swiper>

      <section className="px-[1rem] md:px-32 py-28 bg z-10 relative mt-2">
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
              <a
                href="/register"
                className="text-white no-underline w-full flexs"
              >
                <button className="bg-[#BF9B30] rounded-full text-white px-8 py-4 text-end">
                  Become A Contestant
                </button>
              </a>
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
              <a
                href="/register"
                className="text-white no-underline w-full flexs"
              >
                <button className="bg-[#BF9B30] rounded-full text-white px-8 py-4 text-end">
                  GO FOR SUBMISSION
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
