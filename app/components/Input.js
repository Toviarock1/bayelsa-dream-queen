import React from "react";

const Input = ({ placeholder }) => {
  return (
    <div className="flex justify-center my-10">
      <input
        type="text"
        placeholder={placeholder}
        className=" rounded-3xl py-9 px-9 w-full md:w-4/5 border-4 border-[#454545] outline-none"
      />
    </div>
  );
};

export default Input;
