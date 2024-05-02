// import React, { useState } from 'react';

import ProductDetailsCard from '../Components/ProductDetailsCard';
import ProductDetailsImages from '../Components/ProductDetailsImages';

const ProductDetailsPage = () => {


  return (
    <div className="container mx-auto p-4 md:flex justify-between gap-10 max-w-screen-xl">
      <ProductDetailsImages/>
      <ProductDetailsCard/>
    </div>
  );
};

export default ProductDetailsPage;
