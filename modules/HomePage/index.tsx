import Button from "../../common/components/Button/index";
import Image from "next/image";
import Question from "./Question/question";
import React from "react";
import WhatWeDo from "./WhatWeDo";

const HomePage = () => {
  return (
    <div>
      <div
        className="pt-40 bg-bottom "
        style={{
          backgroundImage: `url(/bg-home-page.svg)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
        }}
      >
        <div>
          <div className="title grid justify-center justify-items-center">
            <p className="font-semibold text-5xl text-center mb-4">
              WHAT WE DO?
            </p>
            <div className="bg-primary h-3 w-3/5 rounded-lg"></div>
          </div>
          <WhatWeDo
            reverse="flex items-center justify-start space-x-28"
            img="/work-1.svg"
            title="Building Industrial IoT infrastructure"
            content1="Using the best sensors (with RS485)"
            content2="Using the best sensors (with RS485)"
            content3="Using the best sensors (with RS485)"
            content4="Using the best sensors (with RS485)"
          />
          <WhatWeDo
            reverse="flex items-center flex-row-reverse justify-start space-x-28 space-x-reverse"
            title="Building Industrial IoT infrastructure"
            img="/work-2.svg"
            content1="Using the best sensors (with RS485)"
            content2="Using the best sensors (with RS485)"
          />
          <WhatWeDo
            reverse="flex items-center justify-start space-x-28"
            title="Building Industrial IoT infrastructure"
            img="/work-3.svg"
            content1="Using the best sensors (with RS485)"
            content2="Using the best sensors (with RS485)"
            content3="Using the best sensors (with RS485)"
          />
          <WhatWeDo
            reverse="flex items-center flex-row-reverse justify-start space-x-28 space-x-reverse"
            title="Building Industrial IoT infrastructure"
            img="/work-4.svg"
            content1="Using the best sensors (with RS485)"
            content2="Using the best sensors (with RS485)"
            content3="Using the best sensors (with RS485)"
          />
          <div className="process">
            <div className="title grid justify-center justify-items-center pb-20">
              <p className="font-semibold text-5xl text-center mb-4">
                THE COMPLETE PROCESS
              </p>
              <div className="bg-primary h-3 w-1/5 rounded-lg"></div>
              <Image src="/process.svg" alt="" width={1200} height={500} />
            </div>
          </div>
          <div className="app-intro pb-32">
            <div className="quote">
              <p className="font-bold text-5xl bg-stone-400/30 m-40 p-20 leading-snug backdrop-blur-md text-white rounded-2xl text-center">
                We bring everything to your hand. Now, wherever you are, just do
                this:
              </p>
            </div>
            <div className="flex justify-center">
              <Image src="/deco-upwork.svg" alt="" width={1300} height={500} />
            </div>
          </div>
        </div>
      </div>
      <div className="contact ">
        <Button content="CONTACT US" />
        <div className="flex justify-center text-5xl font-bold mt-20">
          <p>To make your</p>&nbsp;
          <p className="text-primary">GREENHOUSE </p>&nbsp;
          <p>become smart </p>
        </div>
        <div className="flex justify-center pt-20">
          <Image src="/iphone.svg" alt="" width={500} height={500} />
        </div>
      </div>
      <div className="FAQ grid grid-cols-2 pl-40 pr-40 mt-20 text-lg">
        <div className="title">
          <div className="title-content">
            <p className="font-bold text-5xl">CUSTOMERS ASK US:</p>
            <div className="bg-primary h-3 w-1/3 rounded-lg mt-5"></div>
            <div>
              <Image src="/decoration.svg" alt="" width={550} height={550} />
            </div>
          </div>
        </div>
        <ul className="question">
          <Question content="What is Internet of Things (IoT)?" />
          <Question content="Where can this technology be integrated?" />
          <Question content="Who use iMAI's high technology?" />
          <Question content="Can people who are not tech-savvy use it?" />
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
