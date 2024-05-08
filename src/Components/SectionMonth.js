import React from "react";
import Header from "./header";
import ProductCardTwo from "./ProductCardTwo";
import product from "../Media/product5.png";
import product2 from "../Media/product6.png";
import product3 from "../Media/product7.png";
import product4 from "../Media/product8.png";
const SectionMonth = () => {
  return (
    <>
      <div className="py-8">
        <div className="border-t py-3 container mx-axto">
          <Header text="Month" />
        </div>
        <div className="py-3 container mx-auto">
          <h3 className=" text-2xl font-semibold md:text-3xl pb-4 ">
            Best Selling Products
          </h3>
          <div className="product-cards ">
            <div className="flex flex-nowrap overflow-x-scroll md:overflow-x-hidden md:grid md:grid-cols-4  justify-between gap-8 items-center">
              <ProductCardTwo
                imageSrc={product}
                productName="The north coat"
                currentPrice={260}
                originalPrice={360}
                discount="-40%"
                ratings={5}
              />
              <ProductCardTwo
                imageSrc={product2}
                productName="Gucci Duffle bag"
                currentPrice={960}
                originalPrice={1160}
                discount="-40%"
                ratings={5}
              />
              <ProductCardTwo
                imageSrc={product3}
                productName="Small Bookshelf"
                currentPrice={360}
                originalPrice={400}
                discount="-40%"
                ratings={5}
              />
              <ProductCardTwo
                imageSrc={product4}
                productName="RGB Liquid CPU Cooler"
                currentPrice={160}
                originalPrice={170}
                discount="-40%"
                ratings={5}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionMonth;
