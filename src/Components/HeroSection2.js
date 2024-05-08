import React from "react";
import CountDown from "./countdown2";
import product from '../Media/mp.png'
const SectionHero = () => {
    return ( 
        <>
             <div className="py-8">
        <div className="container mx-auto">
          <div className="bg-black text-white">
            <div className="flex place-content-center justify-evenly flex-wrap  mx-auto py-10 container">
              <div className="flex  flex-col items-start justify-center gap-6 p-6  ps-10">
                <p className="text-green-400">Categories</p>
                <h3 className="text-3xl font-semibold spacing-10">
                  Enhance Your <br />
                  Music Experience
                </h3>
                <CountDown />
                <button className="px-10 py-3 bg-green-500 text-white rounded-md">
                  Buy Now!
                </button>
              </div>
              <div className="flex justify-center items-center py-6 px-6 rounded-full bg-gray-50 pe-10">
                <img src={product} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
        </>
     );
}
 
export default SectionHero;