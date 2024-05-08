import React from "react";
import Header from "./header";
import ProductCard from "./productCard";
import product from "../Media/product9.png";
import product2 from "../Media/product10.png";
import product3 from "../Media/product11.png";
import product4 from "../Media/product8.png";
import product5 from "../Media/product14.png";
import product6 from "../Media/product15.png";
import product7 from "../Media/product16.png";
import product8 from "../Media/product5.png";
// import ImageChanger from "./ImageChanger";
const SectionProduct = () => {
  return (
    <>
      <div className="py-8">
        <div className="border-t py-3 container mx-axto">
          <Header text="Our Product" />
        </div>
        <div className="py-3 container mx-auto">
          <h3 className=" text-2xl font-semibold md:text-3xl pb-4 ">
            Explore Our Product
          </h3>
          <div className="product-cards ">
            <div className="flex flex-nowrap overflow-x-scroll md:overflow-x-hidden md:grid md:grid-cols-4  justify-between gap-8 items-center">
              <ProductCard
                imageSrc={product}
                productName="Breed Dry Dog Food"
                currentPrice={100}
                discount="-40%"
                ratings={5}
              />
              <ProductCard
                imageSrc={product2}
                productName="Canons EOS DSLR Camera"
                currentPrice={360}
                discount="-40%"
                ratings={4}
              />
              <ProductCard
                imageSrc={product3}
                productName="Small BookShelf"
                currentPrice={360}
                discount="-40%"
                ratings={5}
              />
              <ProductCard
                imageSrc={product4}
                productName="RGB Liquid CPU Cooler"
                currentPrice={160}
                discount="-40%"
                ratings={5}
              />
              <ProductCard
                imageSrc={product5}
                productName="Jr Zoom Soccer Cleats"
                currentPrice={1160}
                discount="-40%"
                ratings={5}
              />
              <ProductCard
                imageSrc={product6}
                productName="GP11 Shooter USB Gamepad"
                currentPrice={660}
                discount="-40%"
                ratings={5}
              />
              <ProductCard
                imageSrc={product7}
                productName="Quilted Satin Jacket"
                currentPrice={660}
                discount="-40%"
                ratings={5}
              />
              <ProductCard
                imageSrc={product8}
                productName="The north coat"
                currentPrice={260}
                discount="-40%"
                ratings={4}
              />
            </div>
          </div>
          <div className="flex justify-center my-3">
            <button className="bg-red-600 px-6 py-3 hover:bg-red-700 text-white rounded-md">
              View All Products
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionProduct;
