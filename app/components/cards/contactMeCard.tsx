"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
const ContactMeCard = () => {
  return (
    <div className="max-w-sm mx-auto rounded shadow-lg bg-white p-3 px-14">
      <div className="rounded-md flex justify-center -mt-20">
        <Image
          src="/jameslinkedin.webp"
          alt="LinkedIn Icon"
          width="150"
          height="150"
        />
      </div>
      <div className="mt-5">
        <h2 className="text-black text-2xl">James Okada</h2>
      </div>
      <div className="mt-5">
        <p className="text-gray-700 text-base">
          Thanks for visiting and hope that you learned a lot about me! Send a
          connection request if you want to connect
        </p>
      </div>
      <div className="flex justify-center mt-5">
        <a
          className="contact-button grid grid-cols-12 items-center"
          href="https://www.linkedin.com/in/james-okada-a3b99479/"
          target="_blank"
          rel="nonoopener noreferrer"
        >
          <div className="col-span-2">
            <Image
              src="/icons/linkedin-icon.svg"
              alt="LinkedIn Icon"
              width="16"
              height="16"
            />
          </div>
          <div className="col-span-10">Connect on LinkedIn</div>
        </a>
      </div>
      <div className="flex justify-center mt-3">
        <a
          className="contact-button grid grid-cols-12 items-center bg-black"
          href="https://github.com/jyo142"
          target="_blank"
          rel="nonoopener noreferrer"
        >
          <div className="col-span-2 ">
            <Image
              src="icons/github-icon.svg"
              alt="Github Icon"
              width="16"
              height="16"
            />
          </div>
          <div className="col-span-10 text-white">Github</div>
        </a>
      </div>
    </div>
  );
};

export default ContactMeCard;
