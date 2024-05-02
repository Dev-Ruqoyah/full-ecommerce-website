// import React, { useState } from 'react';

import ProductCardOne from '../Components/ProductCardOne';
import ProductDetailsCard from '../Components/ProductDetailsCard';
import ProductDetailsImages from '../Components/ProductDetailsImages';
import SectionLabel from '../Components/SectionLabel';

const ProductDetailsPage = () => {


  return (
    <div className='max-w-screen-xl mx-auto'>
    <div className="container mx-auto mt-20 py-4 md:flex justify-between gap-10">
      <ProductDetailsImages/>
      <ProductDetailsCard/>
    </div>
    <SectionLabel name='Related items'/>
      <ProductCardOne/>
    </div>
  );
};

export default ProductDetailsPage;
