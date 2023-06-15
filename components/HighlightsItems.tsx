import React from 'react';
import Image from 'next/image';

const HighlightsItems = ({
  highlightImage,
  highlightName,
  highlighDescript,
}: {
  highlightImage: any;
  highlightName: string;
  highlighDescript: string;
}) => {
  return (
    <div className="h-full w-full justify-center p-6">
      <div className="grid gap-4 justify-center items-center cursor-pointer">
        <div className="m-auto w-[144px] h-[144px] hover:scale-105 ease-in duration-300">
          <Image
            src={highlightImage}
            width="144"
            height="144"
            alt="highlight Logo"
          />
        </div>
        <div className="flex flex-col items-center text-white text-xl font-bold justify-center uppercase">
          <h3>{highlightName}</h3>
        </div>
        <div className="text-justify font-semibold">
          <p>{highlighDescript}</p>
        </div>
      </div>
    </div>
  );
};

export default HighlightsItems;
