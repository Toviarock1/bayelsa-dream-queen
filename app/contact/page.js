"use client";
import React, { useState } from "react";
import Input from "../components/Input";
import Checkbox from "../components/Checkbox";

const Page = () => {
  const [fruits, setFruits] = useState({
    updates: false,
    banana: false,
    cherry: false,
  });

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFruits({
      ...fruits,
      [name]: checked,
    });
  };
  const handleSubmit = () => {
    // e.preventDefault();

    var templateParams = {
      email: data.email,
      name: data.firstName + " " + data.middleName + " " + data.lastName,

      firstname: data.firstName,

      lastname: data.lastName,

      middlename: data.middleName,

      origin: data.stateOfOrigin,

      dob: data.DOB,
      age: data.age,

      lga: data.LGA,

      email: data.email,

      number: data.number,

      address: data.address,
      occupation: data.occupation,

      q1: data.haveyoucontestedinanypageant,

      q2: data.whydoyouwanttobethenextBDQ,

      q3: data.howdidknowaboutBDQ,

      q4: data.referrerName,
    };

    // Your email service credentials
    const serviceId = "contact_form";
    const templateId = "template_tgbw12l";
    const userId = "user_C7Rc87pDIIjtLoqaZy1uo";

    // const formData = new FormData();
    // formData.append("to_email", data.email);
    // formData.append("subject", "application for bayelsa dream queen");
    // formData.append("message", data.whydoyouwanttobethenextBDQ);

    // images.forEach((image, index) => {
    //   formData.append(`image${index + 1}`, image);
    // });

    emailjs
      .send(serviceId, templateId, templateParams, userId)
      .then((response) => {
        console.log("Email sent:", response);
        // handleShow();
        // setTimeout(handleShow, 5000);
      })
      .catch((error) => {
        alert("something went wrong");
        console.error("Email not sent:", error);
      });
    // console.log(formData);
  };
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
        <div className="text-center mt-10">
          <button
            className=" py-3 px-10 bg-[#290604] text-white rounded-md"
            onClick={() =>
              step === 2 ? alert("no more page") : setstep(step + 1)
            }
          >
            Send{" "}
          </button>
        </div>{" "}
        {/* <Checkbox
          text={"General Updates"}
          check={fruits.updates}
          change={handleCheckboxChange}
        />
        <Checkbox text={"Becoming a Contestant"} />
        <Checkbox text={"Volunteering"} />
        <Checkbox text={"Sponsorship"} />
        <Checkbox text={"I would like to receive email communications."} /> */}
      </section>
    </>
  );
};

export default Page;
