import React from "react";
import ProductCardOne from "./ProductCardOne";
import Header from "./header";
import product from '../Media/product1.png'
import Countdown from "./countdown";
const SectionToday = () => {
    return ( <>
    
    <div className="py-8 pt-12">
        <div className="container mx-auto">
            <Header text="Today's Specials" />
        </div>
        <div className="flashsales container mx-9 pt-3 w-full px-2 md:w-1/2">
            <div className="flex justify-between items-center">
              <h3 className="text-3xl">Flash sales</h3>
              <Countdown />
            </div>
          </div>
          <div className="product-cards container mx-auto ">
            <div className="flex flex-nowrap overflow-x-scroll md:overflow-x-hidden md:grid md:grid-cols-4  justify-between gap-8 items-center mt-4">
            <ProductCardOne imageURL={product} productName='HAVIT HV-G92 Gamepad' price='160' discountPrice='120' ratingNum='88' percent='-41%'/>
            <ProductCardOne imageURL={product} productName='HAVIT HV-G92 Gamepad' price='160' discountPrice='120' ratingNum='88' percent='-41%'/>
            <ProductCardOne imageURL={product} productName='HAVIT HV-G92 Gamepad' price='160' discountPrice='120' ratingNum='88' percent='-41%'/>
            <ProductCardOne imageURL={product} productName='HAVIT HV-G92 Gamepad' price='160' discountPrice='120' ratingNum='88' percent='-41%'/>
             
              
              
              
             
            </div>
          </div>
          <div className="flex justify-center my-3">
            <button className="bg-red-600 px-6 py-3 hover:bg-red-700 text-white rounded-md">
              View All Products
            </button>
          </div>
    </div>
    </> );
}
 
export default SectionToday;