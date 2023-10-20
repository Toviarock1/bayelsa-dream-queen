import React from "react";

const RegisterInput = ({ label, type, placeholder, height, change, value }) => {
  return (
    <div>
      <label>
        {label} <span className="text-[#F21D2F]">*</span>
      </label>
      <input
        type={type}
        className={`w-full px-4 py-2 mt-2 my-3 ${height}`}
        placeholder={placeholder}
        onChange={change}
        value={value}
      />
    </div>
  );
};

export default RegisterInput;
