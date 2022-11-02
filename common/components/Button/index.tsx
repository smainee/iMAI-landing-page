import React from 'react'

const Button = (props:any) => {
  return (
    <div
    style={{
      backgroundImage: `url(/bg-contact.svg)`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "cover",
    }}
    className="bg-center flex justify-center mr-40 pl-40 pt-20 "
  >
    <button
              style={{
                backgroundImage: `url(/contact-us.svg)`,
                backgroundRepeat: "no-repeat",
              }}
              className="text-white text-xl font-bold border-2 border-none rounded-2xl self-center p-5"
            >
              {props.content}
            </button>
            </div>
  )
}

export default Button