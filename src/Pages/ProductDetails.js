// import React, { useState } from 'react';

import ProductCardOne from '../Components/ProductCardOne';
import ProductDetailsCard from '../Components/ProductDetailsCard';
import ProductDetailsImages from '../Components/ProductDetailsImages';
import SectionLabel from '../Components/SectionLabel';

const ProductDetailsPage = () => {


  return (
    <div className='max-w-screen-xl mx-auto px-4 '>
    <div className="container mx-auto mt-20 py-4  lg:flex justify-between gap-10">
      <ProductDetailsImages/>
      <ProductDetailsCard/>
    </div>
    <SectionLabel name='Related items'/>
      <ProductCardOne productName='HAVIT HV-G92 Gamepad' price='160' discountPrice='120' ratingNum='88'/>
    </div>
  );
};

export default ProductDetailsPage;
