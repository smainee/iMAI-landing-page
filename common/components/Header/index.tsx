import Button from "../Button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div
      style={{
        backgroundImage: `url(/bg-header.svg)`,
        backgroundRepeat: "no-repeat",
      }}
      className="header bg-cover pt-10 pr-20 pl-20 "
    >
      <nav className="nav-bar grid grid-cols-10 items-center justify-center justify-items-center sticky top-0">
        <a href="logo-nav">
          <Image src="/logo-nav.svg" alt="" width={150} height={150} />
        </a>
        <ul className="font-semibold grid grid-cols-6 col-span-7 justify-self-stretch justify-items-center">
          <a href="">FEATURE</a>
          <a href="">SHOWCASE</a>
          <a href="">FAQ</a>
          <a href="">CONTACT</a>
        </ul>
        <button>
          <Image src="/lang.svg" alt="" width={100} height={50} />
        </button>
        <button>
          <Image src="/darkmode.svg" alt="" width={50} height={50} />
        </button>
      </nav>
      <div className="header-detail pr-10">
        <div className="grid grid-rows-3 h-screen  pt-20">
          <div className="content text-5xl font-bold self-end leading-snug grid grid-cols-2">
            <p className="col-start-1">Internet of Things (IoT) touches</p>
            <p className="text-primary opacity-80 col-start-1">
              your bountiful fields
            </p>
          </div>
          <div className="content pt-10 grid grid-cols-2">
            <p className="text-3xl font-bold leading-snug opacity-50">
              Sense the superiority of integrating the future technology
            </p>
          </div>
            <Button 
            content = "CONTACT US"
            />
          </div>
          <div className="flex justify-center text-5xl font-bold">
            <p>To make your</p>&nbsp;
            <p className="text-primary">GREENHOUSE </p>&nbsp; 
            <p>become smart </p>
          </div>
        </div>
      </div>
  );
};

export default Header;
