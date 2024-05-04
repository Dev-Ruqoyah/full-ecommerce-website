import React, { useState } from 'react';

function ImageChanger({ initialImage, changedImage }) {
  const [imageSrc, setImageSrc] = useState(initialImage);
  
  const handleChangeImage = () => {
    setImageSrc(changedImage);
  };

  const handleResetImage = () => {
    setImageSrc(initialImage);
  };

  return (
    <div className='flex items-center '>
      <div className="card ">
        <img src={imageSrc}  alt="Card" />
      </div>

      <div className="flex flex-col ms-8 gap-3">
      <button onClick={handleChangeImage} className='bg-red-600 p-2 rounded-full'></button>
      <button onClick={handleResetImage} className='bg-black p-2 rounded-full'></button>
      </div>
    </div>
  );
}

export default ImageChanger;
