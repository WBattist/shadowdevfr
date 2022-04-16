import React from 'react'

export default function Contact() {
  return (
    <section id="contact">
        <div className="container px-5 py-10 mx-auto">
            <div className='flex justify-center text-center'>
                <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-white'>Contact me</h1>
            </div>
            <div className="w-full justify-center text-center">
              <p>Do you want to contact me to ask a question? Or maybe to <b>hire me?</b></p><br/>
              <h5 className='text-white text-2xl'>contact@xshadow.me</h5>
            </div>
        </div>
    </section>
  )
}