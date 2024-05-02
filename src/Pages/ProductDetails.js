// import React, { useState } from 'react';

import ProductCardOne from '../Components/ProductCardOne';
import ProductDetailsCard from '../Components/ProductDetailsCard';
import ProductDetailsImages from '../Components/ProductDetailsImages';
import SectionLabel from '../Components/SectionLabel';
import product from '../Media/red-pad.png'
import productTwo from '../Media/keyboard.png'
import productThree from '../Media/television.png'
import productTfour from '../Media/speaker.png'
const ProductDetailsPage = () => {


  return (
    <div className='max-w-screen-xl mx-auto px-4 '>
    <div className="container mx-auto mt-20 py-4  lg:flex justify-between gap-10">
      <ProductDetailsImages/>
      <ProductDetailsCard/>
    </div>
    <SectionLabel name='Related items'/>



    {/* Carousel will be used here
    
    */}
      <div className='flex gap-3 overflow-hidden overflow-x-scroll'>
      <ProductCardOne imageURL={product} productName='HAVIT HV-G92 Gamepad' price='160' discountPrice='120' ratingNum='88'/>
      <ProductCardOne imageURL={productTwo} productName='HAVIT HV-G92 Gamepad' price='160' discountPrice='120' ratingNum='88'/>
      <ProductCardOne imageURL={productThree} productName='HAVIT HV-G92 Gamepad' price='160' discountPrice='120' ratingNum='88'/>
      <ProductCardOne imageURL={productTfour} productName='HAVIT HV-G92 Gamepad' price='160' discountPrice='120' ratingNum='88'/>
      <ProductCardOne imageURL={product} productName='HAVIT HV-G92 Gamepad' price='160' discountPrice='120' ratingNum='88'/>
      <ProductCardOne imageURL={product} productName='HAVIT HV-G92 Gamepad' price='160' discountPrice='120' ratingNum='88'/>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
