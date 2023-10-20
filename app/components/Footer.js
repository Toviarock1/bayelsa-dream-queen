import React from "react";
import logo from "./../../public/logo.svg";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#290604] rounded-t-3xl mt-20">
      <div className="px-[1rem] px-24 pt-28">
        <div className="flex justify-center">
          <Image src={logo} width={264} alt="img" />
        </div>
        <div className="flex justify-center text-white mt-2">
          <ul className="md:flex gap-3 p-0">
            <li>
              <Link href={"/"} className="no-underline text-white">
                Home
              </Link>
            </li>
            <li>
              <Link href={"/about"} className="no-underline text-white">
                About
              </Link>
            </li>
            <li>
              <Link href={"/contact"} className="no-underline text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex justify-center text-white mt-2">
          <ul className="md:flex gap-3">
            <li className="text-center">+1 (623) 800‑5437</li>
            <li>Contact@BayelsaDreamQueen.com</li>
          </ul>
        </div>
      </div>
      <div className="text-center text-white border-t border-white  py-3 mt-5">
        <p>COPYRIGHT © 2023 BAYELSA DREAM QUEEN. ALL RIGHTS RESERVED.</p>
      </div>
    </footer>
  );
};

export default Footer;
