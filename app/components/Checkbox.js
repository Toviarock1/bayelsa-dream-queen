import React from "react";

const Checkbox = ({ text }) => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex my-3 w-4/5 items-center gap-2">
        <div>
          <input
            type="checkbox"
            className="rounded-full w-6 h-6 border-2 border-[#454545]"
          />
        </div>
        <div className="flex items-center">
          <p className="mb-0">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default Checkbox;
