import React from 'react';

const ProductCardTwo = ({ imageSrc, productName, currentPrice, originalPrice, discount, ratings }) => {
  return (
    <div className="shrink-0 md:basis-1/4 pt-3 h-100 relative product-card">
      <div className="containe p-4 bg-slate-50">
        <div className="card-header flex justify-end">
          {discount && (
            <div className="discount hidden bg-red-600 items-center h-9 px-2 text-white rounded-md">
              <p className=''>{discount}</p>
            </div>
          )}
          <div className="icons">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 rounded-full p-1 h-8 bg-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 p-1 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
          </div>
        </div>
        <div className="card-contents flex flex-col items-center justify-center w-full h-40 ">
          <img src={imageSrc} alt="" />
          <button className="add-to-cart-button bg-black text-white w-full py-2 absolute bottom-20 rounded-b-md left-0.5 cursor-pointer translate-x-50">
            Add to Cart
          </button>{" "}
        </div>
      </div>
      <div className="py-2 flex flex-col items-start">
        <h4 className="text-md font-semibold">{productName}</h4>
        <div className="prices flex gap-3">
          <p className="text-red-600 font-semibold"> ${currentPrice}</p>
          {originalPrice && (
            <p className="text-gray-300 stroke-gray-300 line-through font-semibold">
              ${originalPrice}
            </p>
          )}
        </div>
        <div className="review flex gap-3">
          <div className="flex items-center gap-1">
            {[...Array(ratings)].map((_, index) => (
              <svg
                key={index}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4 text-yellow-500"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                  clipRule="evenodd"
                />
              </svg>
            ))}
            <p className="text-gray-300">({ratings})</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardTwo;
