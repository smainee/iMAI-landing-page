import Image from "next/image";
import React from "react";

const WhatWeDo = (props: any) => {
  return (
    <div className= {props.reverse} >
      <Image src={props.img} width={750} height={100} />
      <div className="content">
        <ul className="titile text-lg leading-loose	space-x-10">
          <li className="font-bold text-2xl mb-5 flex space-x-5 flex">
            <Image src="/oval.svg" alt="" width={16} height={16} />
           <div className="">{props.title}</div> 
          </li>
          <li className="flex space-x-5 flex">
            <Image src="/check-circle.svg" alt="" width={20} height={20} />
           <div> {props.content1}</div>
          </li>
          <li className="flex space-x-5 flex">
            <Image src="/check-circle.svg" alt="" width={20} height={20} />
           <div> {props.content2}</div>
          </li>
          <li className="flex space-x-5 flex">
            <Image src="/check-circle.svg" alt="" width={20} height={20} />
           <div> {props.content3}</div>
          </li>
          <li className="flex space-x-5 flex">
            <Image src="/check-circle.svg" alt="" width={20} height={20} />
           <div> {props.content4}</div>
          </li>

        </ul>
    </div>
    </div>
  );
};

export default WhatWeDo;
