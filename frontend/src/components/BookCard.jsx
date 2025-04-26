'use client'

import React from 'react'
import Link from 'next/link'

const BookCard = () => {
  return (
    <div>
           <div className="w-full  lg:w-full mx-auto px-6 md:px-32 py-8 md:py-10  bg-blue-50 md:rounded-xl ">
              <div className="h-[320px] md:h-96 flex flex-col items-center justify-centerborder bg-white border-gray-300 rounded-xl  p-8 shadow-lg relative">
                <div className="w-20 h-1 rounded-2xl justify-center bg-blue-500"></div>
                <h1 className=" text-xl md:text-3xl font-extrabold text-center text-gray-800 mb-6 mt-8 md:mt-14  ">
                  Ready to Transform Your Business?
                </h1>
                
                <p className="text-[12px] md:text-lg text-center text-gray-600 max-w-3xl mb-10  ">
                  Schedule a personalized demo to see how our solutions can address your specific challenges and drive growth for your business.
                </p>
                
                <Link 
                  href="/Demo" 
                  className="inline-flex md:mt-8 text-sm md:text-lg items-center justify-center px-6 py-3 border border-blue-500  font-medium rounded-full hover:bg-blue-700 hover:text-white transition-colors duration-200 shadow-lg "
                >
                  Book a Demo Now
                </Link>
              </div>
            </div>
    </div>
  )
}

export default BookCard