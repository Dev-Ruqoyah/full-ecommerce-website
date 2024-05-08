import React from "react";
import Header from "./header";
import product from '../Media/perfume.png'
import product2 from '../Media/ps.png'
import product3 from '../Media/women.png'
const ArrivalSection = () => {
    return ( 
    <>
        <div className="py-8">
        <div className="container mx-auto">
          <Header text={'Featured'}/>
          <div className="month-content py-3">
            <h3 className=" text-2xl font-semibold md:text-3xl pb-4 ">
              New Arrival
            </h3>
            <div className="grid md:grid-cols-2 gap-6 grid-cols-1 container mx-auto">
              <div
                className="play flex flex-col justify-end gap-6 md:h-screen h-full bg-no-repeat bg-black p-6 text-white "
                style={{ backgroundImage: `url({product}) `}}
              >
                <h4 className="text-2xl font-semibold">PlayStation 5</h4>
                <p>
                  Black and White Version of the PS5 <br /> Coming out on sole
                </p>
                <div className="shop ms-1">
                  <p className="border-b-2 w-20 border-white">Shop Now</p>
                </div>
              </div>
              <div className="grid grid-rows-2 gap-6">
                <div
                  className="flex flex-col justify-end gap-6 p-6 w-full bg-center bg-black border bg-no-repeat bg-black-6 text-white"
                  style={{ backgroundImage: `url('{product3}')` }}
                >
                  <h4 className="text-2xl font-semibold">Women's Collection</h4>
                  <p>
                    Featured Women collection that <br /> give you another vibe
                  </p>
                  <div className="shop ms-1">
                    <p className="border-b-2 w-20 border-white">Shop Now</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div
                    className="flex flex-col justify-end gap-1 md:gap-6 p-6 w-full bg-center bg-black border bg-no-repeat bg-black-6 text-white"
                    style={{ backgroundImage: {product2} }}
                  >
                    <h4 className="text-2xl font-semibold">Speakers</h4>
                    <p>Amazon Wireless Speakers </p>
                    <div className="shop ms-1">
                      <p className="border-b-2 w-20 border-white">Shop Now</p>
                    </div>
                  </div>
                  <div
                    className="flex flex-col justify-end gap-1 md:gap-6 p-6 w-full bg-center bg-black border bg-no-repeat bg-black-6 text-white"
                    style={{ backgroundImage: `url('perfume.png')` }}
                  >
                    <h4 className="text-2xl font-semibold">Speakers</h4>
                    <p>GUCCI INTENSE OUD EDP </p>
                    <div className="shop ms-1">
                      <p className="border-b-2 w-20 border-white">Shop Now</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </> );
}
 
export default ArrivalSection;