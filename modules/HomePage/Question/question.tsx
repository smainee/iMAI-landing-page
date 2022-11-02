import Image from 'next/image'
import React from 'react'

const Question = (props:any) => {
  return (
        <ul className='text-lg bg-gray-dark grid items-center p-10 rounded-2xl mb-10'>
            <li className='flex justify-between'>
                <p>{props.content}</p>
            <button><Image src="/shape.svg" alt="" width={20} height={20} /></button>
            </li>
        </ul>
  )
}

export default Question