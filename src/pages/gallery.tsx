import React from 'react';
import Layout from '../../components/Layout';

import { onGalleryTxt } from '../../components/Paragraph';
import GalleryImg from '../../components/GalleryImg';

const inputClass = 'w-full p-10 h-full justify-center items-center';

export default function gallery() {
  return (
    <Layout title="GALLERY">
      <div className="pt-[80px]">
        {/* Gallery Intro */}
        <div className={`bg-[#b4b7bc] ${inputClass}`}>
          <h2 className="uppercase p-1 text-center text-lg mb-2 cursor-pointer hover:scale-105 ease-in duration-300">
            {onGalleryTxt}
          </h2>
        </div>
        {/* gallery links */}
        <div className={`bg-[#b4b7bc] ${inputClass}`}>
          <nav>
            <ul className="flex flex-row-reverse gap-2">
              <li>
                <a href="#">2023</a>
              </li>
              <li>
                <a href="#">2022</a>
              </li>
              <li>
                <a href="#">2021</a>
              </li>
              <li>
                <a href="#">ALL</a>
              </li>
            </ul>
          </nav>
        </div>
        {/* gallery photos */}
        <div className={`bg-white ${inputClass}`}>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            <GalleryImg
              galleryImageUrl={'/../public/Images/Uploads/demoOne.jpg'}
            />
            <GalleryImg
              galleryImageUrl={'/../public/Images/Uploads/demoTwo.jpg'}
            />
            <GalleryImg
              galleryImageUrl={'/../public/Images/Uploads/demoThree.jpg'}
            />
            <GalleryImg
              galleryImageUrl={'/../public/Images/Uploads/demoOne.jpg'}
            />
            <GalleryImg
              galleryImageUrl={'/../public/Images/Uploads/demoTwo.jpg'}
            />
            <GalleryImg
              galleryImageUrl={'/../public/Images/Uploads/demoThree.jpg'}
            />
            <GalleryImg
              galleryImageUrl={'/../public/Images/Uploads/demoOne.jpg'}
            />
            <GalleryImg
              galleryImageUrl={'/../public/Images/Uploads/demoTwo.jpg'}
            />
            <GalleryImg
              galleryImageUrl={'/../public/Images/Uploads/demoThree.jpg'}
            />
            <GalleryImg
              galleryImageUrl={'/../public/Images/Uploads/demoOne.jpg'}
            />
            <GalleryImg
              galleryImageUrl={'/../public/Images/Uploads/demoOne.jpg'}
            />
            <GalleryImg
              galleryImageUrl={'/../public/Images/Uploads/demoOne.jpg'}
            />
            <GalleryImg
              galleryImageUrl={'/../public/Images/Uploads/demoOne.jpg'}
            />
            <GalleryImg
              galleryImageUrl={'/../public/Images/Uploads/demoOne.jpg'}
            />
            <GalleryImg
              galleryImageUrl={'/../public/Images/Uploads/demoOne.jpg'}
            />
            <GalleryImg
              galleryImageUrl={'/../public/Images/Uploads/demoTwo.jpg'}
            />
            <GalleryImg
              galleryImageUrl={'/../public/Images/Uploads/demoThree.jpg'}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}
