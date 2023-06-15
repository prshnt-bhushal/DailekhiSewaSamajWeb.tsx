import React from 'react';
import Image from 'next/image';
import { useState } from 'react';
import {
  BsFillArrowLeftSquareFill,
  BsFillArrowRightSquareFill,
} from 'react-icons/bs';
import coverImg1 from '../public/Images/Uploads/demoOne.jpg';
import coverImg2 from '../public/Images/Uploads/demoTwo.jpg';
import coverImg3 from '../public/Images/Uploads/demoThree.jpg';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [coverImg1, coverImg2, coverImg3];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };
  return (
    <div className="relative w-full h-full ">
      <div className="flex w-[500px] h-[500px] items-center justify-center">
        <button
          className="absolute text-white border-2 border-solid border-white left-0 top-1/2 transform -translate-y-1/2 focus:outline-none"
          onClick={prevSlide}
        >
          <BsFillArrowLeftSquareFill />
        </button>
        <Image
          src={images[currentIndex]}
          alt={`Image ${currentIndex + 1}`}
          width={1200}
          height={1200}
        />
        <button
          className="absolute text-white border-2 border-solid border-white right-0 top-1/2 transform -translate-y-1/2 focus:outline-none"
          onClick={nextSlide}
        >
          <BsFillArrowRightSquareFill />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
