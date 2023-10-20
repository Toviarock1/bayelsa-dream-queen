import React from "react";
import Input from "../components/Input";
import Checkbox from "../components/Checkbox";

const page = () => {
  return (
    <>
      <section className="px-[1rem] md:px-32 py-28 z-10 relative contactbg flex justify-center items-center rounded-b-3xl">
        <div className="flex justify-center items-center">
          <div>
            <h2 className="text-white font-secondary text-5xl font-bold mb-6">
              Contact Us
            </h2>
          </div>
        </div>
      </section>
      <section className="px-[1rem] md:px-32 py-28">
        <h2 className="text-center text-[#150A24] font-secondary text-5xl md:text-6xl font-bold">
          Stay up-to-date on The
          <br /> Bayelsa Dream Queen
        </h2>
        <p className="text-center text-black font-primary text-2xl font-normal">
          Sign up below for the latest news on The Nigerian Queen
        </p>
        <Input placeholder={"First Name"} />
        <Input placeholder={"Last Name"} />
        <Input placeholder={"Email Address"} />
        <Input placeholder={"Phone Number"} />
        <Checkbox text={"General Updates"} />
        <Checkbox text={"Becoming a Contestant"} />
        <Checkbox text={"Volunteering"} />
        <Checkbox text={"Sponsorship"} />
        <Checkbox text={"I would like to receive email communications."} />
      </section>
    </>
  );
};

export default page;
