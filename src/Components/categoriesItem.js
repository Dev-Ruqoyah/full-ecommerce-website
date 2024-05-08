import React from 'react';

const CategoryItem = ({ iconName, category }) => {
  return (
    <div className="category1 w-1/2 md:w-full shrink-0 border hover:bg-red-600 transition-all ease-in duration-300 hover:text-white flex flex-col items-center gap-4 rounded-md py-8" >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className="w-8 h-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d={iconName}
        />
      </svg>
      <p className="text-xl">{category}</p>
    </div>
  );
};

export default CategoryItem;
