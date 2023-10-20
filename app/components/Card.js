import React from "react";
import Image from "next/image";

const Card = ({ image, text, alt }) => {
  return (
    <div className="w-72 h-96">
      <Image src={image} className="w-full h-full" alt={alt} />
      <div className="relative bottom-16 text-white text-center">
        <p className="font-primary text-xl font-light uppercase">{text}</p>
      </div>
    </div>
  );
};

export default Card;
