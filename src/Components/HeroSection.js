import React from "react";
import product from '../Media/heroimage.png'
import product1 from '../Media/applelogo.png'
const HeroSection = () => {
    return ( 
    <>
        <div className="heroSection md:px-8 md:py-8 ">
        <div className="md:container md:mx-auto">
          <div className="flex md:flex-row flex-col md:gap-2  ">
            <div className="md:basis-1/5 border-r-2  md:py-8">
              <div className="sidebar md:px-0 md:bg-white bg-red-200commi py-3 px-3">
                <ul className="flex flex-row w-full md:overflow-x-hidden overflow-x-scroll shrink-0 md:flex-col gap-4 text-xl">
                  <li className="shrink-0">
                    <a href="#">
                      <div>
                        <p>Women's Fashion</p>
                      </div>
                    </a>
                  </li>
                  <li className="shrink-0">
                    <a href="#">Men's Fashion</a>
                  </li>
                  <li className="shrink-0">
                    <a href="#">Electronics</a>
                  </li>
                  <li className="shrink-0">
                    <a href="#">Home & Lifestyle</a>
                  </li>
                  <li className="shrink-0">
                    <a href="#">Medicine</a>
                  </li>
                  <li className="shrink-0">
                    <a href="#">Sports & Outdoor</a>
                  </li>
                  <li className="shrink-0">
                    <a href="#">Baby's & Toys</a>
                  </li>
                  <li className="shrink-0">
                    <a href="#">Groceries & Pets</a>
                  </li>
                  <li className="shrink-0">
                    <a href="#">Health & Beauty</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className=" md:basis-4/5 bg-black md:mt-8 md:container md:py-0 py-12 text-white  md:ms-6">
              <div className="flex md:flex-row flex-col h-full justify-evenly md:gap-0 gap-10 items-center ">
                <div className="md:basis-1/2 flex flex-col md:justify-center px-6 md:px-14 items-start gap-6 md:gap-8    w-full">
                  <div className="logo flex gap-2 items-center">
                    <img src={product1} className="" alt="" />
                    <p>iPhone 14 Series</p>
                  </div>
                  <div className="vouch text-3xl md:text-6xl">
                    <h2>
                      Up to 10% <br /> off Voucher
                    </h2>
                  </div>
                  <div className="shop ms-1">
                    <p className="border-b-2 w-20 border-white">Shop Now</p>
                  </div>
                </div>
                <div className="basis-1/2">
                  <img src={product} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
 );
}
 
export default HeroSection;