import React, { useState } from 'react'
import main from '../Media/ps-main-image.png'
import productImageOne from '../Media/ps-pad-0ne.png'
import productImagetwo from '../Media/ps-pad-two.png'
import productImagethree from '../Media/ps-pad-three.png'
import productImagefour from '../Media/ps-pad-four.png'
const ProductDetailsImages = () => {
  let smallImages = [productImageOne,productImagetwo,productImagethree, productImagefour]
const [mainImage, setMainImage] = useState(main)
const handleImageClick = (imageUrl) => {
  setMainImage(imageUrl)
};

  return (
    <>
        <div className="lg:w-2/3 md:flex gap-8">
       
       <div className="hidden justify-between md:block w-ful">
       {smallImages.map((imageUrl, index) => (
           <img
             key={index}
             src={imageUrl}
             alt={`Product ${index}`}
             className="cursor-pointer hover:opacity-75 mb-3.5 w-[23%] md:h-[140px] md:w-[170px] object-cover rounded"
             onClick={() => handleImageClick(imageUrl)}
           />
         ))}
       </div>
        <div className="mb-4">
         <img src={mainImage} alt="Main Product" className="md:h-[600px] lg:w-[500px] object-cover rounded" />
       </div>
       <div className="flex justify-between md:hidden w-full">
       {smallImages.map((imageUrl, index) => (
           <img
             key={index}
             src={imageUrl}
             alt={`Product ${index}`}
             className="cursor-pointer hover:opacity-75 mb-3.5 w-[23%] md:h-[140px] md:w-[140px] object-cover rounded"
             onClick={() => handleImageClick(imageUrl)}
           />
         ))}
       </div>
     </div>
    </>
  )
}

export default ProductDetailsImages