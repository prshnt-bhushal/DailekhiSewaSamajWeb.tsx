import React from 'react'
import Layout from '../../components/Layout';
import FeedBackBox from '../../components/FeedBackBox';
import MapComponent from '../../components/MapComponents';

export default function contact() {
  return (
    <Layout title="CONTACT">
      <div className='pt-[80px]'>
        {/* form and message */}
        <div className="flex flex-col w-full h-full p-10 justify-center items-center md:flex-row">
          {/* Introduction section*/}
          <div className="text-justify px-3 m-2 basis-[70%]">
            {/* <h2 className="uppercase p-1 text-3xl mb-2 ">
            FeedBack
          </h2> */}
            <p className="font-semibold text-2xl uppercase">
              Feel Free to let us Know
            </p>
          </div>
          <div className="px-3 m-2 basis-[30%]">
            <FeedBackBox />
          </div>
        </div>
        {/* embedded map */}
        <div className="flex flex-col w-full h-full p-10 justify-center items-center bg-white md:flex-row">
          <div className="px-3 m-2 basis-[70%]">
            <MapComponent />
          </div>
          {/* Introduction section*/}
          <div className="text-justify px-3 m-2 basis-[30%]">
            {/* <h2 className="uppercase p-1 text-3xl mb-2 bg-slate-300">
            location
          </h2> */}
            <p className="font-semibold text-2xl uppercase">
              you can find us near pipalbot, dillibazzar
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
