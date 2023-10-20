"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "./../../public/logo2.svg";
import back from "./../../public/backarrow.svg";
import RegisterInput from "../components/RegisterInput";
import { PaystackButton } from "react-paystack";
import emailjs from "@emailjs/browser";
import Modal from "react-bootstrap/Modal";
import success from "./../../public/success.svg";

const Page = () => {
  const [step, setstep] = useState(0);
  const [images, setImages] = useState([]);
  const [data, setdata] = useState({
    firstName: "",
    lastName: "",
    middleName: "",
    stateOfOrigin: "",
    DOB: "",
    age: "",
    LGA: "",
    email: "",
    number: "",
    address: "",
    occupation: "",
    haveyoucontestedinanypageant: "",
    whydoyouwanttobethenextBDQ: "",
    howdidknowaboutBDQ: "",
    referrerName: "",
  });
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleFileChange = (e) => {
    setImages([...e.target.files]);
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
  // const [email, setemail] = useState("test@test.com");

  const publicKey = "pk_test_19dc6fad63afb762ff99f44b74a4500a53700942";
  const amount = 1000000;

  let multiform = "";

  const { email, firstName, middleName, lastName, number } = data;
  const name = firstName + " " + middleName + " " + lastName;

  const componentProps = {
    email,
    amount,
    metadata: {
      name,
      number,
    },
    publicKey,

    text: "Pay Now",

    onSuccess: () => {
      handleSubmit();
      handleShow();
    },

    onClose: () => alert("Wait! You need this"),
  };

  switch (step) {
    case 0:
      multiform = (
        <div>
          <RegisterInput
            label={"First name"}
            placeholder={"Enter your first name"}
            type={"text"}
            change={(e) => setdata({ ...data, firstName: e.target.value })}
            value={data.firstName}
          />{" "}
          <RegisterInput
            label={"Last Name"}
            placeholder={"Enter your last name"}
            type={"text"}
            change={(e) => setdata({ ...data, lastName: e.target.value })}
            value={data.lastName}
          />{" "}
          <RegisterInput
            label={"Middle Name"}
            placeholder={"Enter your middle name"}
            type={"text"}
            change={(e) => setdata({ ...data, middleName: e.target.value })}
            value={data.middleName}
          />{" "}
          <RegisterInput
            label={"State of Origin"}
            placeholder={"Enter your state of origin"}
            type={"text"}
            change={(e) => setdata({ ...data, stateOfOrigin: e.target.value })}
            value={data.stateOfOrigin}
          />{" "}
          <RegisterInput
            label={"Date of Birth"}
            placeholder={"Enter date of birth"}
            type={"text"}
            change={(e) => setdata({ ...data, DOB: e.target.value })}
            value={data.DOB}
          />{" "}
        </div>
      );
      break;
    case 1:
      multiform = (
        <div>
          <RegisterInput
            label={"Age"}
            placeholder={"Enter your age"}
            type={"text"}
            change={(e) => setdata({ ...data, age: e.target.value })}
            value={data.age}
          />{" "}
          <RegisterInput
            label={"LGA"}
            placeholder={"Enter your LGA"}
            type={"text"}
            change={(e) => setdata({ ...data, LGA: e.target.value })}
            value={data.LGA}
          />{" "}
          <RegisterInput
            label={"Email Address"}
            placeholder={"Enter your email"}
            type={"email"}
            change={(e) => setdata({ ...data, email: e.target.value })}
            value={data.email}
          />{" "}
          <RegisterInput
            label={"Mobile Number"}
            placeholder={"Enter mobile number"}
            type={"number"}
            change={(e) => setdata({ ...data, number: e.target.value })}
            value={data.number}
          />{" "}
          <RegisterInput
            label={"Contact Address"}
            placeholder={"Enter your address"}
            type={"text"}
            change={(e) => setdata({ ...data, address: e.target.value })}
            value={data.address}
          />{" "}
        </div>
      );
      break;
    case 2:
      multiform = (
        <div>
          <RegisterInput
            label={"Occupation"}
            placeholder={"Enter your occupation"}
            type={"text"}
            change={(e) => setdata({ ...data, occupation: e.target.value })}
            value={data.occupation}
          />{" "}
          <RegisterInput
            label={"Have you contested in any pageant?"}
            placeholder={"Yes/No"}
            type={"text"}
            change={(e) =>
              setdata({ ...data, haveyoucontestedinanypageant: e.target.value })
            }
            value={data.haveyoucontestedinanypageant}
          />{" "}
          <div>
            <label>
              Why do you want to be the next BDQ ?
              <span className="text-[#F21D2F]"> * </span>{" "}
            </label>{" "}
            <textarea
              cols="30"
              rows="10"
              className={`w-full px-4 py-2 mt-2 my-3`}
              placeholder={"Explain reason"}
              onChange={(e) =>
                setdata({ ...data, whydoyouwanttobethenextBDQ: e.target.value })
              }
              value={data.whydoyouwanttobethenextBDQ}
              readOnly={false}
            ></textarea>{" "}
          </div>
          <RegisterInput
            label={"How did know about BDQ?"}
            placeholder={"Fb, ig, radio, a friend recommended"}
            type={"text"}
            change={(e) =>
              setdata({ ...data, howdidknowaboutBDQ: e.target.value })
            }
            value={data.howdidknowaboutBDQ}
          />{" "}
          <RegisterInput
            label={"Referrer Name"}
            placeholder={"Enter referrer name"}
            type={"text"}
            change={(e) => setdata({ ...data, referrerName: e.target.value })}
            value={data.referrerName}
          />{" "}
        </div>
      );
      break;
  }

  return (
    <section className="bg-[#F2F2F2]">
      <div className="px-[1rem] md:px-32 py-28">
        <div className="flex items-center">
          <div>
            <button onClick={() => step >= 1 && setstep(step - 1)}>
              <Image src={back} width={27} alt="img" />{" "}
            </button>{" "}
          </div>{" "}
          <div className="mx-auto">
            <Image src={logo} className="mr-[52px]" alt="img" />
          </div>{" "}
        </div>{" "}
        <div>
          <h2 className="text-center text-[#290604] text-5xl font-bold mt-10">
            Register Now!
          </h2>{" "}
          <p className="text-black text-lg font-normal text-center font-primary">
            to be a part of the event.{" "}
          </p>{" "}
          <p className="text-[#343D42] text-3xl font-medium font-primary text-center">
            Fill the information carefully{" "}
          </p>{" "}
        </div>
        <div className="px-[1rem] md:px-36 py-28">
          <p className=" text-xl font-medium"> Personal Information </p>{" "}
          {multiform}{" "}
          <div className="text-center mt-10">
            {step !== 2 && (
              <button
                className=" py-3 px-10 bg-[#290604] text-white rounded-md"
                onClick={() =>
                  step === 2 ? alert("no more page") : setstep(step + 1)
                }
              >
                Next{" "}
              </button>
            )}
            {step === 2 && (
              <PaystackButton
                className=" py-3 px-10 bg-[#290604] text-white rounded-md"
                {...componentProps}
              />
            )}
            {/* <button onClick={handleShow}>send</button> */}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>
        <div className="p-4">
          <div>
            <Image src={success} alt="img" />
          </div>
          <h4 className="text-center text-3xl font-bold font-primary">
            You have successfully completed your registration.
          </h4>
          <p className="text-center text-xl font-primary">
            Your entry code will be sent to you within 24hours.
          </p>
          <p className="text-center text-xl font-primary">
            Note: Send The word "Successful" via WhatsApp and Sms to:
            08139933334 to validate your registration.
          </p>
        </div>
      </Modal>
    </section>
  );
};

export default Page;
