import React from 'react'
import Layout from '../../components/Layout';
import Image from "next/image";

export default function about() {
  return (
    <Layout title="ABOUT">
      <div className="pt-[80px]">
        {/* Intro Section */}
        <div className=" p-10 justify-center items-center flex flex-col w-full bg-white md:flex-row h-full">
          {/* text */}
          <div className="text-justify px-3 m-2 basis-[70%]">
            <h2 className="uppercase text-3xl mb-2">Dailekhi Sewa Samaj</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
              enim
            </p>
          </div>
          {/* Photo */}
          <div className="px-3 m-2 basis-[30%]">
            <Image
              src={'/../public/Images/aboutIntro.jpg'}
              alt="aboutUs page Intro Image"
              width={1250}
              height={1200}
            />
          </div>
        </div>
        {/* Objective Section */}
        <div className="p-10 m-2 justify-center items-center flex-col h-full">
          <div className="text-justify p-3 m-2 basis-[70%] bg-[#b4b7bc]">
            <h2 className="uppercase py-5 text-3xl mb-2">
              Objectives of Dailekhi Sewa Samaj
            </h2>
            <div className="text-justify text-lg pb-5">
              <ul className="pl-5 space-y-3 list-disc">
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam,
                  distinctio.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
                  dolorem ipsa aliquam sunt alias minus ut cupiditate excepturi
                  soluta odio. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Impedit reiciendis possimus quo molestiae
                  atque, dolorum culpa dolorem molestias porro amet?
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorem accusantium minus aspernatur magnam provident aut?
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                  numquam aut porro nam doloremque aperiam itaque quas quis quos
                  earum.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
