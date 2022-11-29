import React from "react"
import { home } from "../data/dummydata"


export const Hero = () => {
  return (
    <>
      <section className='hero'>
        {home.map((val, i) => (
          <div className='heroContent'>
            <h1 className='fontSize' data-aos='fade-right'>
              {val.text}
            </h1>
            <h3 data-aos='fade-left'>{val.desc}</h3>
            <div>
            </div>
            <button className='primaryBtn' data-aos='fade-up-right'>
            <a href="http://localhost:2000/createaccount">Make Complaint</a>
            </button>
          </div>
        ))}
      </section>
    </>
  )
}
