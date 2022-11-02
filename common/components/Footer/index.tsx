import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div
      style={{
        backgroundImage: `url(/footer-bg.svg)`,
        backgroundRepeat: "no-repeat",
      }}
      className="footer pt-72 pb-16 pr-40 pl-40 text-white bg-top"
    >
      <div className="footer-detail grid grid-cols-5 pr-0 pl-20 pt-10 pb-10 bg-stone-400/30 backdrop-blur-md leading-10 rounded-3xl">
        <ul className="footer-logo col-span-1 grid self-center text-center justify-items-center justify-start ">
          <li>
            <Image src="/logo-footer.png" width={100} height={100} alt="" />
          </li>
          <li>©2022 iMAI</li>
          <li>All rights reserved</li>
        </ul>
        <ul className="tile who-we-are col-span-1 ">
          <li className="font-bold">WHO WE ARE?</li>
          <li>Vision & Mision</li>
          <li>Core values</li>
          <li>The name IMAI</li>
        </ul>
        <ul className="tile what-we-do col-span-1">
          <li className="font-bold">WHAT WE DO?</li>
          <li>Internet of Things (IOT)</li>
          <li>Electrical System</li>
          <li>Data - AI</li>
          <li>Software Development</li>
        </ul>
        <ul className="title office col-span-2 grid ">
          <li className="font-bold">OFFICE</li>
          <li>
            49 Dong Do <br /> Lien Nghia, Duc Trong, Lam Dong, VietNam
          </li>
          <li>
            <div className="language grid grid-cols-5 justify-items-end pr-20">
              <button className="col-span-3 w-full rounded-xl pl-3 pr-3 h-9 flex items-center self-center justify-between bg-transparent border-solid border-2">
               <Image src = "/android-globe.svg" alt = "" width={20} height={20} />
               <p className="">English - En</p>
               <p className="hidden">English - En</p>
               <Image src = "/chevron-down.svg" alt = "" width={12} height={12} />
               </button>
              <Image src="/fb.svg" alt="  " width={50} height={50} />
              <Image src="/youtube.svg" alt="  " width={50} height={50} />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
